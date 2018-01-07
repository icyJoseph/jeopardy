import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import { App } from "./App";
import * as constants from "../constants";

describe("App", () => {
  const props = {
    categories: [],
    dispatch: sinon.spy()
  };

  let app = shallow(<App {...props} />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  it("has a display-1 heading", () => {
    expect(app.find(".display-1").exists()).toBe(true);
  });

  it("displays the `mainTitle` defined in constants", () => {
    expect(app.find(".display-1").text()).toEqual(constants.mainTitle);
  });

  describe("displays categories of jeopardy", () => {
    let getCatsBtn = app.find(".btn-get-categories");
    it("has a button to `GET` the categories", () => {
      expect(getCatsBtn.exists()).toBe(true);
      expect(getCatsBtn.render().text()).toEqual(constants.GET_CATS_BTN);
    });

    describe("when clicked", () => {
      const expectedAction = { type: constants.types.GET_CATEGORIES };

      beforeEach(() => getCatsBtn.simulate("click"));

      it("dispatched get_categories action", () => {
        expect(props.dispatch.calledWith(expectedAction)).toBe(true);
      });
    });
  });
});
