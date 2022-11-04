import styles from './styles.module.css';
import base_styles from '../../styles.module.css';

// import {useState} from "react";

export const Сomment = ({comment}) => {
    return (
        <section className={ base_styles.card }>
            <a className={ styles.name } href="/">
                { comment.name }
            </a>
            <div className={ styles.right }>
                { comment.rating }
            </div>
            <p>{ comment.text }</p>
        </section>
    )
}
