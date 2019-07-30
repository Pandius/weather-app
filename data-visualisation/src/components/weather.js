import React from "react";

const weather = props => {
  return (
    <div>
      <h2>{props.city}</h2>
      <h3>{props.temperature}</h3>
      <p>{props.weather}</p>
    </div>
  );
};

export default weather;
