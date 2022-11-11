import styles from './styles.module.css'

import {Header} from './components/Header/Header';

import {CatalogPage} from "./pages/CatalogPage/Catalog";
import {DetailPage} from "./pages/DetailPage/Detail";

import {sections} from "./constants/mock";
import {Provider} from "react-redux";
import {store} from "./store";


function App() {
    /*
    <CatalogPage sections={ sections }/>
    <DetailPage book={ sections[0].books[0] }/>
     */
    return (
        <Provider store={store}>
            <Header/>

            <main className={ styles.main }>
                <CatalogPage sections={ sections }/>
            </main>
        </Provider>
    );
}


export default App;
