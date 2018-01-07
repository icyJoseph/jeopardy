import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import * as constants from "../constants";

describe("App", () => {
  let app = shallow(<App />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  it("has a display-1 heading", () => {
    expect(app.find(".display-1").exists()).toBe(true);
  });

  it("displays the `mainTitle` defined in constants", () => {
    expect(app.find(".display-1").text()).toEqual(constants.mainTitle);
  });

  describe("displays 20 categories of jeopardy", () => {
    it("has a button to `GET` the categories", () => {
      expect(app.find(".btn-get-categories").exists()).toBe(true);
    });
  });
});
