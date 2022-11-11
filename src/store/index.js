import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {bookSlice} from './book'
import {categoriesSlice} from './categorie'


export const store = configureStore({
    reducer: combineReducers({
        book: bookSlice.reducer,
        categorie: categoriesSlice.reducer,
    })
})


console.log(store.getState())
