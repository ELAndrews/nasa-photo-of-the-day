import React  from "react";


function PictureCard(props) {

  console.log(props);
  
  return (
    <div className="pictureCard">
      <h1> {props.photoData.title} </h1>
      <span> {props.photoData.date} </span>
      <img className="mainPhoto" src={props.photoState} alt={props.photoData.title}/>
      <div>
        <h3>{props.photoData.title} : Info</h3>
        <p className="photoInfo">{props.photoData.explanation}</p>
      </div>
    </div>
  );
}

export default PictureCard;