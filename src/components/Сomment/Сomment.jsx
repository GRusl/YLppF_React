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
            <div>
                <div>{ name }</div>
                <div>{ rating }</div>
            </div>
            <p>{ text }</p>
        </div>
    )
}
