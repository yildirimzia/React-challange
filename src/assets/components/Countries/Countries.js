import React, { Component } from 'react';
import countryCard from '../../views/countryCard/countryCard';
import { _initCountries,loadMoreCountries } from './CountriesUtils';
import countryHeader from '../../views/cuntryHeader/countryHeader';
import Cdata from './Countries.json';
import '../Countries/Countries.scss';

class Countries extends Component {
  loadMoreCountries = () => {loadMoreCountries(this)};
  constructor(props) {
    super(props);
    this.state = {
      allCountries:[],
      visibleCountries:[],
      countriesVisibleOnLoad: 6,
      countryListError: false,
      buttons: [
        {"text": 'Sort A-Z',},
        {"text": 'Sort By Population',}
      ]
    };
    _initCountries(this);
  }



  render() {
    const {visibleCountries, allCountries, buttons} = this.state;
    return (
      <section className="countries">
        <h1>{Cdata.title}</h1>
        <countryHeader buttons={buttons} />
        <div className="countries__country-list">
          {visibleCountries.map((country, index) => {
            return <React.Fragment key={index}>
            {countryCard({
              imgSrc: country.flag,
              name: country.name,
              demonym: country.demonym,
              population: country.population,
              buttonText: 'View',
              callback: null,
            })}
            </React.Fragment>
          })}
        </div>

        {allCountries.length > visibleCountries.length && (
          <button className="button " onClick={this.loadMoreCountries}>
          {Cdata.loadButtonText}
          </button>
        )}

      </section>
    );
  }
}

export default Countries;
