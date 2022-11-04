import {Item} from "../../components/Item/Item";
import {Сomment} from "../../components/Сomment/Сomment";

import classnames from 'classnames';

import styles from "./styles.module.css"
import base_styles from '../../styles.module.css';

export const DetailPage = (props) => {
    const book = props.sections[0].books[0]

    return (
        <>
            <div className={ styles.infoBlock }>
                <Item className={ styles.dataBlock } book={ book } />
                <div className={ classnames(styles.annotationBlock, base_styles.card) }>
                    { book.annotation }
                </div>
            </div>

            {
                book.comments.map((comment) =>
                    <Сomment comment={ comment } />
                )
            }
        </>
    )
}