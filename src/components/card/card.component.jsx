import React from "react";

import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <p>#{props.player.jersey_number}</p>
    <img
      alt="player"
      src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.player.person_id}.png`}
    />
    <h2> {props.player.display_name} </h2>
    <p>{props.player.position_full}</p>
    <p>
      <b>{props.player.height_ft}</b> ft <b>{props.player.height_in}</b> in |{" "}
      <b>{props.player.weight_lbs}</b> lbs
    </p>
    <img
      className="logo"
      alt="logo"
      src="https://www.nba.com/assets/logos/teams/primary/web/MIA.svg"
    ></img>
  </div>
);
