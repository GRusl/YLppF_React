import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        add: (state, action) => {
            state[action.payload] = (state[action.payload] || 0) + 1;
        },
        remove: (state, action) => {
            state[action.payload] =
                state[action.payload] === 0 ? 0 : state[action.payload] - 1;
        },
    },
});
