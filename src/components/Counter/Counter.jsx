import {useDispatch, useSelector} from "react-redux";
import {cartSlice} from "../../store/cart";
import React from "react";
import {selectBookCount} from "../../store/cart/selectors";
import styles from './styles.module.css';


export const Counter = ({id}) => {
    const dispatch = useDispatch();
    const count = useSelector((state) => selectBookCount(state, id));

    return (
        <div className={ styles.counterBlock } onClick={e => e.preventDefault()}>
            <button className={ styles.counterBtn } onClick={ () => dispatch(cartSlice.actions.remove(id)) } disabled={ !count }>-</button>
            <div className={ styles.counterText }>{ count || 0 }</div>
            <button className={ styles.counterBtn } onClick={ () => dispatch(cartSlice.actions.add(id)) }>+</button>
        </div>
    )
}