import { useState, useEffect, useCallback } from 'react';
import {uuid} from 'uuidv4';
import { api } from './service/api';
import { Fruit, Header, Legend, List } from './styles/styles';
import GlobalStyles from './styles/global';

interface IData {
  id: string,
  name: string,
  price: number,
  date: string
}

const App: React.FC = () => {

  const [data, setData] = useState<IData[]>([]);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [fruta, setFruta] = useState<string>('');
  const [frutaValue, setFrutaValue] = useState<number | undefined> ();

  useEffect(() => {
    api.get('data').then(
      response => {
        setData(response.data)
      }
    )
  }, [isLoad]);

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
    () => {
      setIsLoad(true)
      api.post('data',{
        id: uuid,
        name: fruta,
        price: frutaValue,
        date: new Date().toLocaleDateString()
      }).then(
        response => alert('Tudo ok')
        ).catch(e=> alert('error'))
        .finally(()=> setIsLoad(false))
    },
    [uuid, fruta, frutaValue],
  )  

  return (
    <>
    <GlobalStyles />
    
      <Header>
        <div className="container">
          <div>
            <h1>Fruit List</h1>
            <p>Você tem <span>x</span> frutas na sua lista</p>

          </div>
          <hr />
          {isLoad ? (
            <div>
              <p>Aguarde</p>
            </div>
          ) : (
            <div>
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
          )}
        </div>
      </Header>
      <List>

        <ul className="container">
          <Legend>
             <p>Id</p>
             <p>Fruta</p>
             <p>Preço</p>
             <p>Entrada</p>
          </Legend>
        {
          data.map( fruta => (
            <Fruit key={fruta.id}>
             <p>{fruta.id}</p>
             <p>{fruta.name}</p>
             <p>{convertToCurrency(fruta.price)}</p>
             <p>{fruta.date}</p>
            </Fruit>
          ))
        }
        </ul>
      </List>

    </>
  );
}

export default App;