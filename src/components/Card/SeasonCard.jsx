import React from "react";
import "./SeasonCard.css";

const SeasonCard = (props) => {
  return (
    <div className="card-item" onClick={props.onClick}>
      <img src={props && props.image && props.image.medium} alt={props.name} />
      <div className="data-name">{props.name}</div>
      {/* <div className="data-summary">{props.summary}</div> */}
    </div>
  );
};

export default SeasonCard;
