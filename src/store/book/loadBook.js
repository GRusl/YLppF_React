import { bookSlice } from './index.js'
import { prepareData } from './utils.js'

export const loadBook = (id) => (dispatch, getState) => {
    dispatch(bookSlice.actions.startLoading())
    fetch(`http://localhost:3001/books/${id}`)
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