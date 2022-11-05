import styles from './styles.module.css';
import base_styles from '../../styles.module.css';
import {Rating} from "../Rating/Rating";

// import {useState} from "react";

export const Сomment = ({comment}) => {
    return (
        <section className={ base_styles.card }>
            <div className={ styles.name }>
                { comment.name }
            </div>
            <Rating value={ comment.rating } className={ styles.right }/>
            <p>{ comment.text }</p>
        </section>
    )
}
