import {Item} from "../../components/Item/Item";
import {useEffect, useState} from "react";

import classnames from 'classnames';

import {loadCategoriesIfNotExist} from '../../store/categorie/loadCategoriesIfNotExist.js'

import styles from "./styles.module.css"
import {useDispatch, useSelector} from "react-redux";
import {selectCategories, selectIsCategoriesLoading} from "../../store/categorie/selectors";


export const CatalogPage = (props) => {
    const [activeSection, setActiveSection] = useState(props.sections[0]);

    console.log("------------------------");

    const dispatch = useDispatch()
    console.log("------------------------");
    useEffect(() => {
        dispatch(loadCategoriesIfNotExist)
    }, [dispatch])
    console.log("////////////////////////");
    const categories = useSelector(selectCategories)
    console.log("////////////////////////");
    console.log(categories);
    const isLoading = useSelector(selectIsCategoriesLoading)
    console.log(isLoading);
    console.log("========================");

    if (isLoading) {
        return (
            <>
                <h1>Loading</h1>
            </>
        )
    } else {
        console.log("ELSE");
        return (
            <div className={ styles.content }>
                <aside className={ styles.linksList }>
                    <ul className={ styles.linkUl }>
                        {
                            props.sections.map((section) =>
                                <li className={ classnames(styles.linkLi, (section === activeSection)?styles.linkLi_active:0) }
                                    key={ section.id }
                                    onClick={ () => setActiveSection(section)}>
                                    { section.title }
                                </li>
                            )
                        }
                    </ul>
                </aside>
                <div className={ styles.contentMain }>
                    {
                        activeSection.books.map((book) =>
                            <Item book={ book } key={ book.id } />
                        )
                    }
                </div>
            </div>
        )
    }
}