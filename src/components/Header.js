import React from 'react';
import styled from 'styled-components';
import logo from '../img/resume.png';

const Header = (props) => {

  return(
    <Container>
      <LogoImg src={logo}/>
      <Title>Resume Maker</Title>
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