import {Item} from "../../components/Item/Item";

// import classnames from 'classnames';

import styles from "./styles.module.css"
import {Сomment} from "../../components/Сomment/Сomment";

export const DetailPage = (props) => {
    return (
        <>
            <div className={ styles.infoBlock }>
                <Item className={ styles.dataBlock } />
                <div className={ styles.annotationBlock }>123</div>
            </div>
            <div>
                <Сomment/>
                <Сomment/>
                <Сomment/>
                <Сomment/>
            </div>
        </>
    )
}