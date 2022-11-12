import {Item} from "../../components/Item/Item";
import {Сomment} from "../../components/Сomment/Сomment";

import React, {useEffect} from 'react';

import classnames from 'classnames';

import styles from "./styles.module.css"
import base_styles from '../../styles.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {loadBookIfNotExist} from "../../store/book/loadBookIfNotExist";
import {selectBookById} from "../../store/book/selectors";

export const DetailPage = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBookIfNotExist(params.bookId));
    }, [params]);

    const book = useSelector(state => selectBookById(state, params.bookId));

    if (Object.keys(book).length === 0) return null;

    return (
        <>
            <div className={ styles.infoBlock }>
                <Item className={ styles.dataBlock } book={ book } down={ true } />
                <section className={ classnames(styles.annotationBlock, base_styles.card) }>
                    <h2 className={ styles.annotationTitle }>Аннотация</h2>
                    <p>{ book.annotation }</p>
                </section>
            </div>

            {
                book.reviews.map((comment) =>
                    <Сomment comment={ comment } />
                )
            }
        </>
    )
}