import React  from "react";


function PictureCard(props) {

console.log(props);
  return (
    <div>
      <h2> {props.photoData.title} </h2>
      <img src={props.photoState} alt={props.photoData.title}/>
      <div>
        <h3>{props.photoData.title} : Info</h3>
        <p>{props.photoData.explanation}</p>
      </div>
    </div>
  );
}

export default PictureCard;