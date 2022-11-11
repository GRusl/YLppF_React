import {Statuses} from '../../constants/statuses.js'

function selectedBookModule(state) {
    return state.book
}

function selectBooks(state) {
    return Object.values(selectedBookModule(state).entities)
}

function selectIsBooksLoading(state) {
    return selectedBookModule(state).status === Statuses.inProgress
}

function selectIsBooksLoaded(state) {
    return selectedBookModule(state).status === Statuses.success
}

function selectBookById(state, id) {
    console.log(selectedBookModule(state).entities)
    return selectedBookModule(state).entities[id]
}

export { selectedBookModule, selectBooks, selectIsBooksLoading, selectBookById, selectIsBooksLoaded }