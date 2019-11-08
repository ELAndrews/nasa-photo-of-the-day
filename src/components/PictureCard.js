import React  from "react";
import styled from 'styled-components';

const PictureCardDiv = styled.div`
  line-height: 1.8;
  width: 80%;
  max-width: 900px;
  margin: 50px auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 3rem;
  color:  #282c34;
  text-shadow: 2px 1px #93A2E1;
`;

const Photo = styled.img`
  width: 100%;
`;

const H3 = styled.h3`
  font-size: 1.6rem;
  color:  #282c34;
`;

const Info = styled.p`
  color:  #282c34;
  padding: 0px 40px;
  text-align: left;
`;



function PictureCard(props) {
  
  return (
    <PictureCardDiv>
      <H1> {props.photoData.title} </H1>
      <H3> {props.photoData.date} </H3>
      <Photo src={props.photoState} alt={props.photoData.title}/>
      <H3>{props.photoData.title}: Info</H3>
      <Info>{props.photoData.explanation}</Info>
    </PictureCardDiv>
  );
}

export default PictureCard;