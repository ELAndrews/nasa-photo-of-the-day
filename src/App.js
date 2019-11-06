import "./App.css";
import Header from './components/Header';
import PictureCard from './components/PictureCard';
import Discover from './components/Discover';
import PreviousDates from './components/PreviousDates';
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [photoState, setPhotoState] = useState();
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=LCCfcQ7MrlhZtpsB5uODfmnWcq2zisNRnKwGnvjm')
      .then(response => {
        console.log(response)
        setPhotoState(response.data.hdurl)
        setPhotoData(response.data)
      })
      .catch(error => {
        console.log(`error collecting data`)
      })
  }, []) 

  return (
    <div className="App">
      <Discover />
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
