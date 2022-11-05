import {Item} from "../../components/Item/Item";
import {Сomment} from "../../components/Сomment/Сomment";

import classnames from 'classnames';

import styles from "./styles.module.css"
import base_styles from '../../styles.module.css';

export const DetailPage = (props) => {

    return (
        <>
            <div className={ styles.infoBlock }>
                <Item className={ styles.dataBlock } book={ props.book } down={ true } />
                <section className={ classnames(styles.annotationBlock, base_styles.card) }>
                    <h2 className={ styles.annotationTitle }>Аннотация</h2>
                    <p>{ props.book.annotation }</p>
                </section>
            </div>

            {
                props.book.comments.map((comment) =>
                    <Сomment comment={ comment } />
                )
            }
        </>
    )
}