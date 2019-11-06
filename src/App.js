import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header';
import PictureCard from './components/PictureCard';
import PreviousDates from './components/PreviousDates';
import axios from "axios";


function App() {

    const [photoState, setPhotoState] = useState([]);
    const [pastPhotoState, setPastPhotoState] = useState([]);

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(`error collecting data`)
        })
    }, [])


  return (
    <div className="App">
      <Header />
      <PictureCard />
      <PreviousDates /> 
    </div>
  );
}

export default App;
