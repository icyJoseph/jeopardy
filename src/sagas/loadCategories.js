import { call, put } from "redux-saga/effects";
import { getCategories } from "../api";
import { types } from "../constants";

export function* loadCategories() {
  try {
    const categories = yield call(getCategories);
    yield put({ type: types.LOAD_CATEGORIES, payload: categories });
  } catch (error) {
    yield put({ type: types.FAILED_GET_CATEGORIES, error });
  }
}
