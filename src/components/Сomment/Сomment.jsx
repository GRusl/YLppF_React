import styles from './styles.module.css';
import base_styles from '../../styles.module.css';
import {Rating} from "../Rating/Rating";

import React from 'react';

export const Сomment = ({comment}) => {
    return (
        <section className={ base_styles.card }>
            <div className={ styles.h }>
                <div className={ styles.name }>
                    { comment.user.name }
                </div>
                <Rating value={ comment.rating } className={ styles.right }/>
            </div>
            <p>{ comment.text }</p>
        </section>
    )
}
