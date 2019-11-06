import React from "react";

function Header(props) {

  return (
    <div>
        <h1>NASA's Photo of the Day </h1>
        <p> {props.photoData.date} </p>
    </div>
  );
}

export default Header;