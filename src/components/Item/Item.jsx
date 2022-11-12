import styles from './styles.module.css';
import base_styles from '../../styles.module.css';

import classnames from 'classnames';

import {Rating} from "../Rating/Rating";

import React from 'react';
import {Link} from "react-router-dom";
import {cartSlice} from "../../store/cart";
import {useDispatch, useSelector} from "react-redux";
import {selectBookCount} from "../../store/cart/selectors";

export const Item = ({book, className=0, down=false, href=''}) => {
    const dispatch = useDispatch();
    const count = useSelector((state) => selectBookCount(state, book.id));

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

            <div className={ styles.counterBlock } onClick={e => e.preventDefault()}>
                <button className={ styles.counterBtn } onClick={ () => dispatch(cartSlice.actions.remove(book.id)) } disabled={ !count }>-</button>
                <div className={ styles.counterText }>{ count || 0 }</div>
                <button className={ styles.counterBtn } onClick={ () => dispatch(cartSlice.actions.add(book.id)) }>+</button>
            </div>
        </Link>
    )
}
