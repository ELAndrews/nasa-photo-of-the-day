import React from "react";

function Header(props) {


  return (
    <div className="App-header">
        <img className="App-logo" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA"/>
        <h1> Photo of the Day </h1>
        <button className="App-link" > Discover today </button>
    </div>
  );
}

export default Header;