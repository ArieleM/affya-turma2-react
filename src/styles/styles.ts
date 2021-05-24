import styled from 'styled-components';

export const Header = styled.header`
  background-color: #A0E7E5;
  width: 100%;
  height: 40vh;
  hr{
    border-color: #FBE7C6;
  }
`;
export const TitleHeader = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    color: #FFAEBC;
    font-weight: 900;
    font-size: 24px;
  }
  p{
    color: #868B8E;
  }    
`;
export const ContentHeader = styled.div`
  width: 70%;
  margin: 20px auto 0;
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
    background-color:#FFAEBC;
    height: 40px;
    width: 180px;
    color: #FCFDFF;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
export const List = styled.main`
  height: 70vh;
  background-color: #FBE7C6;
  ul{
    position: absolute;
    left: 0;
    right: 0;
    margin-top: -70px;
  }
`;
export const Fruit = styled.li`
  width: 100%;
  height: 66px;
  background-color: #FCFDFF;
  margin: 10px 0;
  border: 1px solid #B4F8C8;
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
  margin: 5px 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  p{
    width: 40%;
    &:nth-child(3n+1){
      width: 10%;
    }
  }
`;