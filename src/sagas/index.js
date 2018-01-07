import { takeEvery, all } from "redux-saga/effects";
import { loadCategories } from "./loadCategories";
import { types } from "../constants";

function* rootSaga() {
  yield all([takeEvery(types.GET_CATEGORIES, loadCategories)]);
}

export default rootSaga;
