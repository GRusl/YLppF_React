import styles from './styles.module.css';
import base_styles from '../../styles.module.css';

import classnames from 'classnames';

import {Rating} from "../Rating/Rating";

import React from 'react';
import {Link} from "react-router-dom";
import {Counter} from "../Counter/Counter";

export const Item = ({book, className=0, down=false, href=''}) => {
    return (
        <Link className={ classnames(
            styles.item,
            base_styles.card,
            className,
            (down)?styles.down:0
        ) } to={ `/book/${ book.id }` }>
            <div className={ styles.infoBlock }>
                <div className={ styles.title }>{ book.name }</div>
                <ul className={ styles.infoUl }>
                    <li className={ styles.infoLi }>{ book.authors.join(', ') }</li>
                    <li className={ styles.infoLi }>{ book.genre }</li>
                    <li className={ styles.infoLi }>
                        <Rating value={ book.rating } className={ styles.infoLi } />
                    </li>
                </ul>
                <p className={ styles.price }>{ book.price }₽</p>
            </div>

            <Counter id={ book.id }/>
        </Link>
    )
}
