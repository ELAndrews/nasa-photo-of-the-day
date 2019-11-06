import React from "react";

function Header(props) {

const handleClick = (event) => {
  event.preventDefault();
  window.scrollBy(0, window.innerHeight)
  console.log("click registered")
}

  return (
    <div className="App-header">
        <img className="App-logo" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA"/>
        <h1> Photo of the Day </h1>
        <a href="#" onClick={handleClick} className="App-link" > Discover today </a>
    </div>
  );
}

export default Header;