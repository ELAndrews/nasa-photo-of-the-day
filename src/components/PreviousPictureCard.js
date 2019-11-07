import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

const SmallPhotoCard = styled.div`
  max-width: 20%;
  text-align: center;
`;

const SmallPhoto = styled.img`
  width: 100%;
  height: auto;
  opacity: 0.6;
`;

const Span = styled.span`
  font-size: 1.2rem;
  color: white;
`;

function PreviousPictureCards(props) {

  function formatDate() {
    let today = new Date();
    let todayStr = moment(today).format('YYYY-MM-DD');

    return todayStr;
  }
  const [previousPhotoState, setPreviousPhotoState] = useState();
  const [previousPhotoData, setPreviousPhotoData] = useState([]);
  const [nasaAPIOld, setnasaAPIOld] = useState(`https://api.nasa.gov/planetary/apod?api_key=krL1cCbGBXpZ5c5cti1GnKp60Z8ueT8RqpypcSlY&date=${formatDate(Date())}`);

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
      <Span>{previousPhotoData.title}</Span>
      <p>{previousPhotoData.date}</p>
    </SmallPhotoCard>
  );
}

export default PreviousPictureCards;