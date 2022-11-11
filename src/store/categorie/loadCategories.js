import { categoriesSlice } from './index.js'
import { prepareData } from './utils.js'
import { selectCategories } from './selectors.js'
import {bookSlice} from "../book";


export const loadCategories = (id) => (dispatch, getState) => {

    if (selectCategories(getState()).length > 0) {
        return
    }
    dispatch(categoriesSlice.actions.startLoading())
    fetch(`http://localhost:3001/genres/${id}`)
        .then((response) => response.json())
        .then((res) => {
            let a = prepareData(res)
            console.log(a)
            dispatch(bookSlice.actions.successLoading(a))
        })
        .catch(() => {
            dispatch(bookSlice.actions.failLoading())
        })
}
