import {createSlice} from "@reduxjs/toolkit"

function add(state, action) {
    if (action.payload in state)
        state[action.payload] += 1
    else
        state[action.payload] = 1
}

function remove(state, action) {
    if (action.payload in state) {
        state[action.payload] -= 1
        if (state[action.payload] === 0)
            delete state[action.payload]
    }
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        add,
        remove
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})