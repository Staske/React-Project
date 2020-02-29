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

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { players, searchField } = this.state;
    const filteredPlayers = players.filter(player =>
      player.last_name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Miami Heat</h1>
        <SearchBox
          placeholder="Enter player last name"
          handleChange={this.handleChange}
        />
        <CardList players={filteredPlayers} />
      </div>
    );
  }
}

export default App;
