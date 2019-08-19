import React from "react";

const ButtonFetchBeers = props => {
  return (
    <button className="button" onClick={props.click}>
      Search Your Beer
    </button>
  );
};

export default ButtonFetchBeers;
