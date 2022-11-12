import { bookSlice } from "./index";
import { prepareData } from "../utils";

export const loadBooksIfNotExist = (category_id) => (dispatch, getState) => {
  dispatch(bookSlice.actions.startLoading());
  fetch('http://localhost:3001/books')
    .then((response) => response.json())
    .then((categories) => {
      dispatch(bookSlice.actions.successLoading(prepareData(categories)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
