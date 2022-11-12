import { bookSlice } from "./index";
import { prepareData } from "../utils";

export const loadBookIfNotExist = (book_id) => (dispatch, getState) => {
    dispatch(bookSlice.actions.startLoading());
    fetch(`http://localhost:3001/books/${book_id}`)
    .then((response) => response.json())
    .then((book) => {
      console.log('load', book, prepareData(book));
      dispatch(bookSlice.actions.successLoading(prepareData(book)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
