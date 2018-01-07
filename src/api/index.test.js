import { getCategories } from "./index";
import sinon from "sinon";
import axios from "axios";
import response from "./testhelper";

describe("getCategories", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should display a response", done => {
    const resolved = new Promise(r => r({ data: response.categories }));
    sandbox.stub(axios, "get").returns(resolved);

    getCategories()
      .then(res => {
        expect(res).toEqual(response.categories);
      })
      .then(done, done);
  });
});
