import { categoriesSlice } from './index.js'
import { prepareData } from './utils.js'
import { selectCategories } from './selectors.js'


export const loadCategoriesIfNotExist = (dispatch, getState) => {

    if (selectCategories(getState()).length > 0) {
        return
    }
    dispatch(categoriesSlice.actions.startLoading())
    fetch('http://localhost:3001/genres')
        .then((response) => response.json())
        .then((res) => {
            dispatch(categoriesSlice.actions.successLoading(prepareData(res)))
        })
        .catch(() => {
            dispatch(categoriesSlice.actions.failLoading())
        })
}
