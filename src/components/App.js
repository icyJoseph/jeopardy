import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import * as constants from "../constants";

export class App extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <h2 className="display-1">{constants.mainTitle}</h2>
        <ul style={{ listStyle: "none" }}>
          {categories.map(cat => (
            <li key={cat.id} className="cat-title">
              {cat.title}
            </li>
          ))}
        </ul>
        <Button
          className="btn-get-categories"
          onClick={() =>
            this.props.dispatch({ type: constants.types.GET_CATEGORIES })
          }
        >
          {constants.GET_CATS_BTN}
        </Button>
      </div>
    );
  }
}

export default connect(
  state => ({
    categories: state.categories
  }),
  null
)(App);
