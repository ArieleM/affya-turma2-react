import styled from 'styled-components';

export const Header = styled.header`
  background-color: #41414C;
  width: 100%;
  height: 30vh;
`;
export const TitleHeader = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FCFDFF;
  span{
    color: red;
  }      
`;
export const ContentHeader = styled.div`
  width: 70%;
  margin: 30px auto 0;
  display: flex;
  justify-content: space-around;
  input, button{
    border-radius: 5px;
    border: none;
  }
  input{
    padding: 0 10px;
  }
  button{
    background-color: orange;
    height: 50px;
    width: 200px;
    color: #FCFDFF;
    text-transform: uppercase;
    font-weight: 900;
  }
`;
export const List = styled.main`
  height: 70vh;
  ul{
    margin-top: -70px;
  }
`;
export const Fruit = styled.li`
  width: 100%;
  height: 66px;
  background-color: #FCFDFF;
  margin: 10px 0;
  border: 1px solid #E1E3E6;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  p{
    width: 40%;
    font-weight: 700;
    &:nth-child(3n+1){
      width: 10%;
      color: #BFBFCC;
    }
  }
`;
export const Legend = styled.div`
  color: #FCFDFF;
  margin: 10px 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  p{
    width: 40%;
    &:nth-child(3n+1){
      width: 10%;
    }
  }
`;