import {createSlice} from "@reduxjs/toolkit"
import {Statuses} from '../../constants/statuses.js'

const initialState = {
    ids: '',
    entities: {},
    status: Statuses.idle
}

function startLoading(state, action) {
    state.status = Statuses.inProgress
    state.entities = {}
    state.id = ''
}

function successLoading(state, action) {
    state.status = Statuses.success
    state.entities = action.payload.entities
    state.id = action.payload.id
}

function failLoading(state, action) {
    state.status = Statuses.failed
    state.entities = {}
    state.id = ''
}

export const categoriesSlice = createSlice({
    name: "categorie",
    initialState: initialState,
    reducers: {
        startLoading: startLoading,
        successLoading:  successLoading,
        failLoading: failLoading
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})