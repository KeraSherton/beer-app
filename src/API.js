import React from "react";

const API = props => {
    const id= props.foodName
  console.log(id);
  return (
  <div>'https://api.punkapi.com/v2/beers?food=`{foodName.name}</div>;
};
// const API = `https://api.punkapi.com/v2/beers?food=chicken`

export default API;
