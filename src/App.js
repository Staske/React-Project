import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      searchField: ""
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
        <input
          type="search"
          placeholder="Enter player name"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList players={this.state.players} />
      </div>
    );
  }
}

export default App;
