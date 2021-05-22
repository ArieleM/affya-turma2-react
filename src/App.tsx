import { useState, useEffect, useCallback } from 'react';
import {uuid} from 'uuidv4';
import { api } from './service/api';

interface IData {
  id: string,
  name: string,
  price: number
}

const App: React.FC = () => {

  const [data, setData] = useState<IData[]>([]);
  const [fruta, setFruta] = useState<string>('');
  const [frutaValue, setFrutaValue] = useState<number | undefined> ();

  useEffect(() => {
    api.get('data').then(
      response => {
        setData(response.data)
      }
    )
  }, [fruta]);

  const convertToCurrency = useCallback(
    (value: number) => 
      Intl.NumberFormat('pt-br', 
      {
        style: 'currency',
        currency:'BRL'
      }).format(value)
    ,
    [],
  )  
  const addToApi = useCallback(
    () => 
      api.post('data',{
        id: uuid,
        name: fruta,
        price: frutaValue
      }).then(
        response => alert('Tudo ok')
      ).catch(e=> alert('error'))
    ,
    [uuid, fruta, frutaValue],
  )  

  return (
    <div>
      <h1>Hello tu</h1>
      <ul>
      {
        data.map( fruta => (
          <li key={fruta.id}>
            {fruta.name} | {convertToCurrency(fruta.price)}
          </li>
        ))
      }
      </ul>
      <hr />
      <h2>{fruta}</h2> 
      <hr />
      <input type="text" 
        onChange={e=>setFruta(e.target.value)} 
        placeholder="Qual fruta"
      />
      <input type="number" 
        onChange={e=>setFrutaValue(parseFloat(e.target.value))} 
        placeholder="Qual valor"
      />
      <button onClick={addToApi}> Adicionar</button>
    </div>
  );
}

export default App;