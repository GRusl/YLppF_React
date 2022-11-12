import { bookSlice } from './index.js'
import { prepareData } from './utils.js'

export const loadBook = (id) => (dispatch, getState) => {
	dispatch(bookSlice.actions.startLoading())
	console.log(123, '=======')
	fetch(`http://localhost:3001/books/${id}`)
		.then((response) => response.json())
		.then((res) => {
			dispatch(bookSlice.actions.successLoading(prepareData(res)))
		})
		.catch(() => {
			dispatch(bookSlice.actions.failLoading())
		})
}