/** @format */
import profilePic from "./assets/profile-picture.jpg";
import React from "react";

function Card() {
  return (
    <div className='card'>
      <img
        src={profilePic}
        alt='Profile Picture'
        className='card-image'></img>
      <h2 className='card-title'>Syed Rahmat Shah</h2>
      <p className='card-text'>I am studying and play cricket</p>
    </div>
  );
}

export default Card;
