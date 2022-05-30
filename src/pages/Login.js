import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Login = ({auth}) => {

  const history = useHistory();

  const goTomain = (event) => {
    auth
      .login(event.currentTarget.textContent)
      .then(console.log("Login"));
    
      history.push('/Main')
  }
  
  return(
    <>
      <Header />
      <Container>
        <Snsbox>
          <Title>L o g I n</Title>
          <GoogleBtn onClick={goTomain}>Google</GoogleBtn>
          <FaceBtn onClick={goTomain}>FaceBook</FaceBtn>
        </Snsbox>
      </Container>
    </>
  )
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  background-color: #e0e0e0;
  margin-top: 3rem;
  width: 70%;
  border-radius: 1rem;
  border-style: solid;
`;

const Title = styled.div`
  display: flex;
  font-size: 2.5rem;
  font-family: sans-serif;
  font-weight: bold;
  color: #546e7a;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
`;

const Snsbox = styled.li`
  width: 80%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 2rem;
`;

const GoogleBtn = styled.button`
  font-size: 3.5rem;
  width: 40%;
  heigth: 50%;
  color: #f5f5f5;
  background-color: #e53935;
  border-radius: 1rem;
  margin: auto;
  margin-bottom: 2rem;
  &:hover {
    background-color: #ef9a9a;
    color: black;
  }
`;

const FaceBtn = styled.button`
  font-size: 3.5rem;
  width: 40%;
  heigth: 50%;
  color: #f5f5f5;
  background-color: #3f51b5;
  border-radius: 1rem;
  margin: auto;
  margin-bottom: 2rem;
  &:hover {
    background-color: #9fa8da;
    color: black;
  }
`;