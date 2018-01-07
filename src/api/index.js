import axios from "axios";

const apiEndPoint = `http://jservice.io/api/categories?count=20`;

export const getCategories = () => {
  return axios.get(apiEndPoint).then(response => response);
};
