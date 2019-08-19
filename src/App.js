import React from "react";
import "./App.css";
import BeersList from "./BeersList";
import ButtonFetchBeers from "./ButtonFetchBeers";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    food: "",
    beers: []
  };

  onInputChange(term) {
    this.setState({ food: term });
  }

  handleDataFetch = () => {
    fetch(`https://api.punkapi.com/v2/beers?food=${this.state.food}`)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          beers: json
        });
      })
      .catch(error => console.log(error + " Something wrong!"));
  };

  render() {
    const beers = this.state.beers;
    return (
      <div className="app">
        <h1>Welcome!</h1>
        <h2>You want to know what order to drink? </h2>
        <h2>Tell me what you eat:</h2>
        <div>
          <input
            type="text"
            value={this.state.text}
            onChange={e => this.onInputChange(e.target.value)}
            placeholder="Write name of your food"
          />
        </div>
        <ButtonFetchBeers
          className="btn btn-danger"
          click={this.handleDataFetch}
        />
        <BeersList beers={beers} />
      </div>
    );
  }
}

export default App;
