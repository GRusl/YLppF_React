import React, {useEffect} from "react";
import styles from "../CartPage/styles.module.css";
import {Item} from "../../components/Item/Item";
import {useDispatch, useSelector} from "react-redux";
import {selectBooks} from "../../store/book/selectors";
import {selectCartModule} from "../../store/cart/selectors";
import {loadBooksIfNotExist} from "../../store/book/loadBooksIfNotExist";
import {useParams} from "react-router-dom";
import {loadBookIfNotExist} from "../../store/book/loadBookIfNotExist";


export function CartPage() {
    const books = useSelector((state) => selectCartModule(state));
    console.log(books, 'books')

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBookIfNotExist(Object.keys(books)))
    }, [])

    const all_books_ = useSelector(selectBooks)
    if (all_books_.length === 0) {
        return null;
    }
    let all_books = {}
    for (const book of all_books_){
        all_books[book.id] = book
    }
    console.log(all_books, 'all_books')

    const books_id = [];
    for (const [id, cnt] of Object.entries(books)) {
        if (cnt > 0) books_id.push(id);
    }
    console.log(books_id, 'books_id')

    const sum = books_id.map((id) => all_books[id].price * books[id]).reduce((partialSum, a) => partialSum + a, 0);

    return (
        <div className={ styles.content }>
            <aside className={ styles.linksList }>
                <div className={ styles.title }>Ваш заказ:</div>
                <ul className={ styles.linkUl }>
                    {
                        books_id.map((id) =>
                            <li className={ styles.linkLi }>
                                { all_books[id].name }<span className={ styles.price }>{ all_books[id].price }₽</span>
                            </li>
                        )
                    }
                </ul>
                <div className={ styles.totalPrice }>
                    Итого: { sum }₽
                </div>
            </aside>
            <div className={ styles.contentMain }>
                {
                    books_id.map((id) =>
                        <Item book={ all_books[id] } key={ id }/>
                    )
                }
            </div>
        </div>
    )
}
