import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: "Udonis Haslem",
          id: "1"
        },
        {
          name: "Kendrick Nunn",
          id: "2"
        },
        {
          name: "Jimmy Butler",
          id: "3"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.players.map(player => (
          <h1 key={player.id}> {player.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;
