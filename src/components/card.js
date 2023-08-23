import React from 'react';
import '../css/card.css';
import React, { Component } from 'react'

const Card = (props) => {
  return (
    <div className="card">
      {props.content}
    </div>
  );
};
export default Card;



