import React from "react";
import "./App.css";
import Header from './components/Header';
import PictureCard from './components/PictureCard';
import PreviousDates from './components/PreviousDates';


function App() {


  return (
    <div className="App">
      <Header />
      <PictureCard />
      <PreviousDates /> 
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
