import styles from './styles.module.css'

import {Header} from './components/Header/Header';

import {CatalogPage} from "./pages/CatalogPage/Catalog";
import {DetailPage} from "./pages/DetailPage/Detail";

import {sections} from "./constants/mock";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import React from 'react';
import {CartPage} from "./pages/CartPage/Cart";


function App() {
    /*
    <CatalogPage sections={ sections }/>
    <DetailPage book={ sections[0].books[0] }/>
     */
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>

                <main className={ styles.main }>
                    <Routes>
                        <Route path="/" element={<CatalogPage/>} >
                            <Route path='/categories/:categoryId' element={<CatalogPage/>} />
                        </Route>
                        <Route path='/book/:bookId' element={<DetailPage/>} />
                        <Route path='/cart' element={<CartPage/>} />
                    </Routes>
                </main>
            </BrowserRouter>
        </Provider>
    );
}


export default App;
