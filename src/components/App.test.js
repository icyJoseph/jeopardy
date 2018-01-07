import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import { App } from "./App";
import * as constants from "../constants";
import response from "../api/testhelper";

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

  it("displays zero category titles", () => {
    expect(app.find(".cat-title").length).toEqual(0);
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

      it("dispatches get_categories action", () => {
        expect(props.dispatch.calledWith(expectedAction)).toBe(true);
      });
    });

    describe("when saga returns value", () => {
      props.categories = response.categories;
      const objCount = Object.keys(props.categories).length;

      beforeEach(() => {
        app = shallow(<App {...props} />);
      });

      it("renders a list with all the received objects", () => {
        const numberOfElements = app.find(".cat-title").length;
        expect(numberOfElements).toEqual(objCount);
      });
    });
  });
});
