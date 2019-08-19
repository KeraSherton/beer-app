import React from "react";
import "./Beer.css";

const BeersList = props => {
  console.log(props.beers);

  const beers1 = props.beers.map(beer => (
    <div className="Beer" key={beer.id} ingredients={beer.ingredients}>
      <h3>{`${beer.name}`}</h3>
      <img className="image" src={beer.image_url} alt="Beer" />
      <h4>{`${beer.description}`}</h4>
      {/* <li>{`${beer.ingredients.malt}`}</li>
      <li>"Hops: {`${beer.ingredients.hops}`}"</li> */}
      <li>Yeast: {`${beer.ingredients.yeast}`}</li>
    </div>
  ));
  return <div className="cont">{beers1}</div>;
};

export default BeersList;
