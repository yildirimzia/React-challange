import React from 'react';
import './countryHeader.scss';

const countryHeader = (props) => {
  const {buttons = []} = props;
  return (
    <div className="country-header">
      {buttons.map((button, index) => {
        return <div key={index} className="country-header__wrapper">
          <button onClick={button.callback} className="button button--primary">
            {button.text}
          </button>
        </div>
      })}
    </div>
  );
};

export default countryHeader;
