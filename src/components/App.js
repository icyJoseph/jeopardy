import React, { Component } from "react";
import * as constants from "../constants";

class App extends Component {
  render() {
    return (
      <div>
        <h2 className="display-1">{constants.mainTitle}</h2>
      </div>
    );
  }
}

export default App;
