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
                    //<CatalogPage sections={ sections }/>
                    //<DetailPage book={ sections[0].books[0] }/>
                }
                <DetailPage book={ sections[0].books[0] }/>
            </main>
        </>
    );
}

export default App;
