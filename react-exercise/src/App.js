import React from 'react';
import './App.css';

import Card from './Card';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {
      this.state.countries = data;
    });
  }

  render() {
    return (
      <div className="App">
        <input
          className='searchbar'
          placeholder={'Search countries...'}
        />
        {
          this.state.countries.map(e => <Card name={e.name} />)
        }
      </div>
    );
  }
}

export default App;
