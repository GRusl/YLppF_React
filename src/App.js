import styles from './App.css'

import {Header} from './components/Header/Header';
import {CatalogPage} from "./pages/CatalogPage/Catalog";
// import {findByRole} from "@testing-library/react";

import {books} from "./constants/mock";

function App() {
    return (
        <>
            <Header/>
            <main className={ styles.main }>
                <CatalogPage books={ books } />
            </main>
        </>
    );
}

export default App;
