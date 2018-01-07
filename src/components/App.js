import React, { Component } from "react";
import { Button } from "reactstrap";
import * as constants from "../constants";

class App extends Component {
  render() {
    return (
      <div>
        <h2 className="display-1">{constants.mainTitle}</h2>
        <Button className="btn-get-categories">{constants.GET_CATS_BTN}</Button>
      </div>
    );
  }
}

export default App;
