import styles from './styles.module.css';
import base_styles from '../../styles.module.css';

import classnames from 'classnames';

import {useState} from "react";
import {Rating} from "../Rating/Rating";

import React from 'react';
import {Link} from "react-router-dom";

export const Item = ({book, className=0, down=false, href=''}) => {
    const [count, setCount] = useState(0);

    return (
        <Link className={ classnames(
            styles.item,
            base_styles.card,
            className,
            (down)?styles.down:0
        ) } to={ href }>
            <div className={ styles.infoBlock }>
                <div className={ styles.title }>{ book.name }</div>
                <ul className={ styles.infoUl }>
                    <li className={ styles.infoLi }>{ book.author }</li>
                    <li className={ styles.infoLi }>{ book.genre }</li>
                    <li className={ styles.infoLi }>
                        <Rating value={ book.rating } className={ styles.infoLi } />
                    </li>
                </ul>
                <p className={ styles.price }>{ book.price }₽</p>
            </div>
            <div className={ styles.counterBlock }>
                <button className={ styles.counterBtn }
                        onClick={() => setCount(count - 1)}
                        disabled={count === 0}>-</button>
                <div className={ styles.counterText }>{count}</div>
                <button className={ styles.counterBtn }
                        onClick={() => setCount(count + 1)}>+</button>
            </div>
        </Link>
    )
}
