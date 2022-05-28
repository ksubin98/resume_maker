import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const Login = (props) => {
  
  return(
    <>
      <Header />
      <Container>
        <Sbox>
          <GoogleBtn>Google</GoogleBtn>
          <FaceBtn>FaceBook</FaceBtn>
        </Sbox>
      </Container>
    </>
  )
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem;
`;

const GoogleBtn = styled.button`
  font-size: 3.5rem;
  width: 40%;
  heigth: 50%;
  color: #f5f5f5;
  background-color: #e53935;
  border-radius: 1rem;
  margin: auto;
  margin-bottom: 0.5rem;
`;

const Sbox = styled.div`
  display: flex;
  width: 50%;
  heigth: 50%;
  padding: 0.5em;
  cursor: pointer;
  border-style: solid;
  border-width: 0.01rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

const FaceBtn = styled.button`
  font-size: 3.5rem;
  width: 40%;
  heigth: 50%;
  color: #f5f5f5;
  background-color: #3f51b5;
  border-radius: 1rem;
  margin: auto;
`;