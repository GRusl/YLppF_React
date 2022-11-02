import styles from './styles.module.css';

import {useState} from "react";

export const Item = (
    {
        title='Название',
        rating= 0,
        price= 0,
        genre='Жанр',
        author='Автор',
        id,
    }) => {
    const [count, setCount] = useState(0);

    return <div className={ styles.item }>
        <div className={ styles.content }>
            <h2>{ title }</h2>
            <ul>
                <li>{ author }</li>
                <li>{ genre }</li>
                <li>{ rating }</li>
            </ul>
            <p>{ price }₽</p>
        </div>
        <div>
            <button className={ styles.counterBtn } onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
            {count}
            <button className={ styles.counterBtn } onClick={() => setCount(count + 1)}>+</button>
        </div>
    </div>
}
