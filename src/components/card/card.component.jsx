import React from "react";

import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <p>#{props.player.jersey_number}</p>
    <img
      alt="player"
      src={`https://robohash.org/${props.player.jersey_number}?set=set2&size=180x180`}
    />
    <h2> {props.player.display_name} </h2>
    <p>{props.player.position_full}</p>
    <p>
      <b>{props.player.height_ft}</b> ft <b>{props.player.height_in}</b> in |{" "}
      <b>{props.player.weight_lbs}</b> lbs
    </p>
  </div>
);
