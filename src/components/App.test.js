import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let app = shallow(<App />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });
});
