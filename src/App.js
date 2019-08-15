import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    value: ""
  };

  handleTextChange = () => {
    // const value = this.refs.search.value;
    fetch(`https://api.punkapi.com/v2/beers?food={value}`).then(res =>
      console.log(res)
    );
  };
  render() {
    return (
      <>
        <div>
          <h1>Welcome!</h1>
          <h2>You want to know what order to drink? </h2>
          <h2>Tell me what you eat:</h2>
          <input
            value={this.state.defaultValue}
            placeholder="Write name of main ingredience"
            type="text"
          />
          <button onClick={this.handleTextChange}>Search</button>
          <div className="block" id="first">
            first beer
          </div>
          <div className="block" id="second">
            second beer
          </div>
        </div>
      </>
    );
  }
}
export default App;
