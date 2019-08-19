import React from 'react';
import './App.css';
import BeersList from './BeersList';
import ButtonFetchBeers from './ButtonFetchBeers'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { food: '' };


  }

  handleChange(event) {
    this.setState({ food: event.target.value });
  }

  render() {

    return (
      <div>
        <input type="text"
          value={this.state.value}
          onClick={this.handleChange}
          placeholder="   Write name of your food"
        />
      </div>
    );
  }
}


class App extends Form {

  state = {
    beers: [],
    food: this.props.food
  }

  handleDataFetch = () => {

    // fetch(`https://api.punkapi.com/v2/beers?food=chicken`)
    fetch(`https://api.punkapi.com/v2/beers?food=${this.props.food}`)
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
    const foodChoice = this.statefood
    console.log(foodChoice)
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