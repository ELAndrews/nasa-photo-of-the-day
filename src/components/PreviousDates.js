import React from "react";
import PreviousPictureCard from './PreviousPictureCard';
import styled from 'styled-components';
import moment from "moment";

const PreviousDatesDiv = styled.div`
  width: 100%;
  background-color: #282c34;
  color: white;
  position: relative;
  bottom: 10px;
  right: 8px;
  padding: 100px 20px 50px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  justify-content: space-evenly;
`;

function PreviousDates(props) {

let datesArray = [];

for(let i = 1; i < 5; i++) {
  datesArray.push(moment().subtract(i, 'days'));
}

  return (
    <PreviousDatesDiv>
      <CardContainer>
        {
          datesArray.map((curr, index) => {
            return (
              <PreviousPictureCard 
              data = {curr}
              key = {index}
             /> 
            )
          })
          }
      </CardContainer>
    </PreviousDatesDiv>
  );
}

export default PreviousDates;

