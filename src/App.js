import styles from './styles.module.css'

import {Header} from './components/Header/Header';
import {CatalogPage} from "./pages/CatalogPage/Catalog";
import {DetailPage} from "./pages/DetailPage/Detail";
// import {findByRole} from "@testing-library/react";

import {sections} from "./constants/mock";

function App() {
    return (
        <>
            <Header/>

            <main className={ styles.main }>
                {
                    //
                    //<DetailPage sections={ sections }/>
                }
                <CatalogPage sections={ sections }/>
            </main>
        </>
    );
}

export default App;
