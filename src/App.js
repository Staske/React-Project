import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

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
    const { players, searchField } = this.state;
    const filteredPlayers = players.filter(player =>
      player.last_name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Enter player last name"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList players={filteredPlayers} />
      </div>
    );
  }
}

export default App;
