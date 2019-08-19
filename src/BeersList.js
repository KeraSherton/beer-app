import React from 'react';
import './Beer.css'


const BeersList = props => {
  console.log(props.beers);

  const beers = props.beers.map(beer => (
    <div className="Beer" key={beer.id}>
      <h3>{`${beer.name}`}</h3>
      <img className="image" src={beer.image_url} alt="Beer" />
      <div> Ingredients:
        <li>Malts: {`${beer.ingredients.malt}`}</li>
        <li>Hops: {`${beer.ingredients.hops}`}</li>
        <li>Yeast: {`${beer.ingredients.yeast}`}</li>
      </div></div>
  ))
  return (
    <div className="cont">
      {beers}
    </div>
  );
}

export default BeersList;