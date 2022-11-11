import {createSlice} from "@reduxjs/toolkit"
import {Statuses} from '../../constants/statuses.js'

const initialState = {
    ids: [],
    entities: {},
    status: Statuses.idle
}

function startLoading(state, action) {
    state.status = Statuses.inProgress
    state.entities = {}
    state.ids = []
}

function successLoading(state, action) {
    state.status = Statuses.success
    state.entities = action.payload.entities
    state.ids = action.payload.ids
}

function failLoading(state, action) {
    state.status = Statuses.failed
    state.entities = {}
    state.ids = []
}

export const bookSlice = createSlice({
    name: "book",
    initialState: initialState,
    reducers: {
        startLoading: startLoading,
        successLoading:  successLoading,
        failLoading: failLoading
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
