import React from 'react';
import './Beer.css'


const BeersList = props => {
  console.log(props.beers);

  const beers = props.beers.map(beer => (
    <div className="Beer" key={beer.id}>
      <h3>{`${beer.name}`}</h3>
      <img className="image" src={beer.image_url} alt="Beer" />
      <div>{`${beer.description}`}</div>
      <li>Yeast: {`${beer.ingredients.yeast}`}</li>
    </div>

  ))
  return (
    <div className="cont">
      {beers}
    </div>
  );
}

export default BeersList;