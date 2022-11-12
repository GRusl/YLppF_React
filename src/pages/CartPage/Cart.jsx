import React from "react";
import styles from "../CartPage/styles.module.css";
import classnames from "classnames";
import {Item} from "../../components/Item/Item";
import {useSelector} from "react-redux";
import {selectBooks} from "../../store/book/selectors";
import {selectCartModule} from "../../store/cart/selectors";


export function CartPage() {
    const books = useSelector((state) => selectCartModule(state)) || [];
    console.log(books)

    const all_books = useSelector(state => selectBooks(state));
    console.log(all_books)

    if (!books) return null;
    if (!all_books) return null;

    const books_id = [];
    for (const [id, cnt] of Object.entries(books)) {
        if (cnt > 0) books_id.push(id);
    }
    console.log(books_id)

    return (
        <div className={ styles.content }>
            <aside className={ styles.linksList }>
                <div className={ styles.title }>Ваш заказ:</div>
                <ul className={ styles.linkUl }>
                    <li className={ styles.linkLi }>
                        3423423423423<span className={ styles.price }>100</span>
                    </li>
                </ul>
                <div className={ styles.totalPrice }>
                    Итого: 100
                </div>
            </aside>
            <div className={ styles.contentMain }>
                <Item book={{'name': 'sdjcb'}} key={ 53 } href={`/book/123`} />
                <Item book={{'name': 'sdjcb'}} key={ 1 } href={`/book/123`} />
                <Item book={{'name': 'sdjcb'}} key={ 2 } href={`/book/123`} />
            </div>
        </div>
    )
}
