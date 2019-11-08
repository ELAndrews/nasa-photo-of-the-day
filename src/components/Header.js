import React from "react";
import styled, { keyframes } from 'styled-components';

const HeaderDiv = styled.div`
   background-color: #282c34;
   min-height: 100vh; 
   width: 100vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: calc(10px + 2vmin);
   color: white;
   margin: 0px;
   position: relative;
   bottom: 10px;
   right: 8px;
`;

const LogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${LogoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const Button = styled.button`
  color: #61dafb;
  font-size: 2rem;
  padding: 8px 20px;
  border-radius: 25px;

    &:hover {
    background-color:  #61dafb;
    color: white;
  }
`;

const H1 = styled.h1`
  font-size: 5rem;
  text-shadow: 4px 2px #93A2E1;
`;


function Header(props) {

const handleClick = (event) => {
  event.preventDefault();
  window.scrollBy(0, window.innerHeight)
}

  return (
    <HeaderDiv>
        <Logo src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA"/>
        <H1> Photo of the Day </H1>
        <Button onClick={handleClick} > Discover today </Button>
    </HeaderDiv>
  );
}

export default Header;