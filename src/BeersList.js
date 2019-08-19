import React from "react";
import "./Beer.css";

const BeersList = props => {
  console.log(props.beers);

  // return (
  //   <>
  //     <div> {props.name} </div>
  //     <li>{props.ingredients.malt.name}</li>
  //   </>
  const beers = props.beers.map(beer => (
    <div className="Beer" key={beer.id} ingredients={beer.ingredients}>
      <h3>{`${beer.name}`}</h3>
      <img className="image" src={beer.image_url} alt="Beer" />
      <div>{`${beer.description}`}</div>
      <li>"Malts: {`${beer.ingredients.malt.name}`}"</li>
      <li>Yeast: {`${beer.ingredients.yeast}`}</li>
    </div>
  ));
  return <div className="cont">{beers}</div>;
};

export default BeersList;
