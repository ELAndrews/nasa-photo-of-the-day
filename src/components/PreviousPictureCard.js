import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

const SmallPhotoCard = styled.div`
  max-width: 20%;
  text-align: center;

  &:hover{
    transform: scale(1.2);
  }
`;

const SmallPhoto = styled.img`
  width: 250px;
  height: 250px;
  overflow: hidden;
  opacity: 0.4;
`;

const Info = styled.div`
  position: relative;
  bottom: 180px;
  padding: 10px;
`;

const Span = styled.span`
  font-size: 1.2rem;
  color: white;
`;

function PreviousPictureCards(props) {

const newDate = new Date(props.data._d)

  function formatDate(data) {
    let date = new Date(data);
    let dateStr = moment(date).format('YYYY-MM-DD');

    return dateStr;
  }

  const [previousPhotoState, setPreviousPhotoState] = useState();
  const [previousPhotoData, setPreviousPhotoData] = useState([]);
  const nasaAPIOld = `https://api.nasa.gov/planetary/apod?api_key=krL1cCbGBXpZ5c5cti1GnKp60Z8ueT8RqpypcSlY&date=${formatDate(newDate)}`;

  useEffect(() => {

    axios.get(nasaAPIOld)
      .then(response => {
        setPreviousPhotoState(response.data.hdurl)
        setPreviousPhotoData(response.data);
      })
      .catch(error => {
        console.log(`error collecting data`)
      })
  }, [nasaAPIOld]);
  
  return (
    <SmallPhotoCard>
      <SmallPhoto src={previousPhotoState} alt={previousPhotoData.title}/>
      <Info>
        <Span>{previousPhotoData.title}</Span>
        <p>{previousPhotoData.date}</p>
      </Info>
    </SmallPhotoCard>
  );
}

export default PreviousPictureCards;