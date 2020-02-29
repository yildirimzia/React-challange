import React from 'react';
import './countryHeader.scss';

const countryHeader = (props) => {
  return (
    <div className="country-header">
      {props.buttons.map((button, index) => {
        return <div key={index} className="country-header__wrapper">
          <button onClick={button.callback} className="button button--primary">
            {button.text}
          </button>
        </div>
      })}
    </div>
  );
}

export default countryHeader;
