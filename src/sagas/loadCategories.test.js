import { loadCategories } from "./loadCategories";
import response from "../api/testhelper";
import { call } from "redux-saga/effects";
import { getCategories } from "../api";

const generator = loadCategories();

it("applies call to getCategories API", () => {
  expect(generator.next().value).toEqual(call(getCategories));
});
