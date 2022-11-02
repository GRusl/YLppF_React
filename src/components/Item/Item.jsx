// import styles from './styles.module.css';

import {useState} from "react";

export const Item = (
    {
        title='Название',
        rating= 0,
        price= 0,
        genre='Жанр',
        author='Автор'
    }) => {
    const [count, setCount] = useState(0);

    return <div>
        <h2>{ title }</h2>
        <ul>
            <li>{ author }</li>
            <li>{ genre }</li>
            <li>{ rating }</li>
        </ul>
        <p>{ price }₽</p>
        <div>
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    </div>
}
