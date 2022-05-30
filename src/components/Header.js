import React from 'react';
import styled from 'styled-components';
import logo from '../img/resume.png';
import logoutImg from '../img/logout.png';

const Header = ({logout}) => {

  return(
    <Container>
      <LogoImg src={logo}/>
      <Title>Resume Maker</Title>
      {logout && (<Logout  src={logoutImg} onClick={logout}/>)}
    </Container>

  )
}

export default Header;

const Container = styled.div`
  display: flex;
  position: relative;
  background-color: #cfd8dc;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  heigth: 100%;
`;

const LogoImg = styled.img`
  width: 6rem;
  heigth: 4.5rem;
`;

const Title = styled.div`
  font-size: 5rem;
  font-family: "Gill Sans", sans-serif;
`;

const Logout = styled.button`
    position: absolute;
    right: 0.5em;
    padding: 0.8em;
    width: 2rem;
    cursor: point;
`;