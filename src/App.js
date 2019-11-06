import "./App.css";
import Header from './components/Header';
import PictureCard from './components/PictureCard';
import Discover from './components/Discover';
import PreviousDates from './components/PreviousDates';
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function App() {

  function formatDate() {
    let today = new Date();
    let todayStr = moment(today).format('YYYY-MM-DD');

    return todayStr;
  }

  const [photoState, setPhotoState] = useState();
  const [photoData, setPhotoData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(formatDate())
  const nasaAPI =(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${selectedDate}`);

  useEffect(() => {
    axios.get(nasaAPI)
      .then(response => {
        console.log(response)
        setPhotoState(response.data.hdurl)
        setPhotoData(response.data)
      })
      .catch(error => {
        console.log(`error collecting data`)
      })
  }, []) 

  console.log(selectedDate);

  return (
    <div className="App">
      <Discover 
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}/>
      <Header 
       photoData = {photoData}/>
      <PictureCard 
      photoState = {photoState}
      photoData = {photoData}/>
      <PreviousDates /> 
    </div>
  );
}

export default App;
