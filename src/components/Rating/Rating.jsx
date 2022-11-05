import classnames from "classnames";
import styles from "../../pages/CatalogPage/styles.module.css";

export const Rating = ({value, max=5, className=0}) => {
    return (
        <>
            {Array.apply(0, Array(value)).map(function (x, i) {
                return '❤';
            })}
        </>
    )
}
