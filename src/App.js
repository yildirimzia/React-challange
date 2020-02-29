import React from 'react';
import countryCard from './assets/views/countryCard/countryCard';
import Countries from './assets/components/Countries/Countries';

import './assets/styles/general.scss';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countries />
      </header>
    </div>
  );
}

export default App;