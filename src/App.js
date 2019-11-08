// import "./App.css";
import Header from './components/Header';
import PictureCard from './components/PictureCard';
import Discover from './components/Discover';
import PreviousDates from './components/PreviousDates';
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppDiv = styled.div`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New";
`;


function App() {

  function formatDate() {
    let today = new Date();
    let todayStr = moment(today).format('YYYY-MM-DD');

    return todayStr;
  }

  const [photoState, setPhotoState] = useState();
  const [photoData, setPhotoData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(formatDate())
  const [nasaAPI, setnasaAPI] = useState(`https://api.nasa.gov/planetary/apod?api_key=krL1cCbGBXpZ5c5cti1GnKp60Z8ueT8RqpypcSlY&date=${formatDate(Date())}`);

  useEffect(() => {

    axios.get(nasaAPI)
      .then(response => {
        setPhotoState(response.data.hdurl)
        setPhotoData(response.data);

        return () => {
          console.log('Component clean up');
      }
      })
      .catch(error => {
        console.log(`error collecting data`)
        alert(`You have selected a date in the future. Please select a different date.`)
      })
  }, [nasaAPI]);

  
  return ( 
    <AppDiv>
        <Header 
        photoData = {photoData}/>
        <Discover 
        formatDate = {formatDate}
        setnasaAPI = {setnasaAPI}
        selectedDate ={selectedDate}
        setSelectedDate={setSelectedDate}/>
        <PictureCard 
        photoState = {photoState}
        photoData = {photoData}/>
        <PreviousDates 
         />
      </AppDiv>
  );
}

export default App;
