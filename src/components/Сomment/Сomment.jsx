import styles from './styles.module.css';
import base_styles from '../../styles.module.css';

// import {useState} from "react";

export const Сomment = (
    {
        name='Имя',
        rating= 0,
        text= '---',
    }) => {

    return (
        <div className={ base_styles.card }>
            <a className={ styles.name } href="/">
                { name }
            </a>
            <div className={ styles.right }>
                    { rating }
                </div>
            <p>{ text }</p>
        </div>
    )
}
