import React from "react";
import PreviousPictureCard from './PreviousPictureCard';
import styled from 'styled-components';

const PreviousDatesDiv = styled.div`
  background-color: #282c34;
  color: white;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

function PreviousDates() {

  return (
    <PreviousDatesDiv>
      <CardContainer>
        <PreviousPictureCard />
        <PreviousPictureCard />
        <PreviousPictureCard />
        <PreviousPictureCard />
      </CardContainer>
    </PreviousDatesDiv>
  );
}

export default PreviousDates;