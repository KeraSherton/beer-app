import React from 'react';
import './App.css';
import BeersList from './BeersList';
import ButtonFetchBeers from './ButtonFetchBeers'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { food: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ food: event.target.value });
  }

  render() {
    // const API = `https://api.punkapi.com/v2/beers?food=`}${this.state.food;
    return (
      <div>
        <input type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="   Write name of your food"
        />
      </div>
    );
  }
}


class App extends Form {

  state = {
    beers: [],
    food: this.state.food
  }
  handleDataFetch = () => {
    fetch(`https://api.punkapi.com/v2/beers?food=chicken`)
      // fetch(`https://api.punkapi.com/v2/beers?food={this.state.food}`)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          beers: json
        })
      })
      .catch(error => console.log(error + " Something wrong!"))

  }

  render() {

    const beers = this.state.beers;
    console.log(beers)
    return (
      <div className="app">
        <h1>Welcome!</h1>
        <h2>You want to know what order to drink? </h2>
        <h2>Tell me what you eat:</h2>
        <Form className="form" />
        <ButtonFetchBeers click={this.handleDataFetch} />
        <BeersList beers={beers} />
      </div>
    );
  }
}

export default App;