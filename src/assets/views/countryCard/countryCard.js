import React from 'react';
import './countryCard.scss';

const countryCard = (props) => {
  return (
    <div key={props.index} className="country-card">
      <img src={props.imgSrc} alt=""/>
      <h1>{props.name}</h1>
      <span>{props.demonym}</span>
      <p>{props.population}</p>

      <button className="button button--primary" onClick={props.callback}>
       {props.buttonText}
      </button>
    </div>
  );
}

export default countryCard;
