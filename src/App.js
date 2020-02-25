import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://data.nba.net/json/cms/noseason/team/heat/roster.json"
    )
      .then(response => response.json())
      .then(data =>
        this.setState({ players: data.sports_content.roster.players.player })
      );
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.players.map(player => (
            <h1 key={player.person_id}> {player.display_name} </h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
