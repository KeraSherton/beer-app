import React from 'react';
// import './Beer.css'


const BeersList = props => {
  console.log(props.beers);

  const beers = props.beers.map(beer => (
    <div key={beer.id}>
      <h2>{`${beer.name}`}</h2>
      <img src={beer.image_url} alt="Beer" />
      <div> Ingredients:
        <li>"Malts: {`${beer.ingredients.malt.name}`}"</li>
        <li>"Hops: {`${beer.ingredients.hops}`}"</li>
        <li>"Yeast: {`${beer.ingredients.yeast}`}"</li>
      </div></div>
  ))
  return (
    <div className="Beer">
      {beers}
    </div>
  );
}

export default BeersList;