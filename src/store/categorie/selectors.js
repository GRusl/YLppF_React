import {Statuses} from '../../constants/statuses.js'

function selectedCategoriesModule(state) {
    return state.categories
}

function selectCategories(state) {
    return Object.values(state.entities)
}

function selectIsCategoriesLoading(state) {
    return state.book.status === Statuses.inProgress
}

export {selectedCategoriesModule, selectCategories, selectIsCategoriesLoading}
