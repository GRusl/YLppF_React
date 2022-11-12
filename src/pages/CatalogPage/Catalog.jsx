import {Item} from "../../components/Item/Item";
import {useEffect, useState} from "react";

import classnames from 'classnames';

import styles from "./styles.module.css"
import {useDispatch, useSelector} from "react-redux";
import {Link, Navigate, useParams} from "react-router-dom";
import {loadCategoriesIfNotExist} from "../../store/category/loadCategoriesIfNotExist";
import {selectCategories, selectCategoryById} from "../../store/category/selectors";

import React from 'react';

export function CatalogPage() {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(loadCategoriesIfNotExist);
    }, [params]);

    const categories = useSelector(state => selectCategories(state));
    const categories_one_data = useSelector(state => selectCategoryById(state,
        (Object.keys(params).length === 0)?0:params.categoryId));

    if (categories.length === 0) return null;
    if (Object.keys(params).length === 0) {
        return <Navigate to={`/categories/${categories[0].id}`}></Navigate>
    } else {
        return (
           <div className={ styles.content }>
                <aside className={ styles.linksList }>
                    <ul className={ styles.linkUl }>
                        {
                            categories.map((section) =>
                                <li className={ classnames(styles.linkLi, (section.id === params.categoryId)?styles.linkLi_active:0) }
                                    key={ section.id }>
                                    <Link className={ styles.linkA } to={ `/categories/${section.id}` }>{ section.name }</Link>
                                </li>
                            )
                        }
                    </ul>
                </aside>
                <div className={ styles.contentMain }>
                    {
                        categories_one_data.books.map((book) =>
                            <Item book={ book } key={ book.id } />
                        )
                    }
                </div>
            </div>
        )
    }
}
