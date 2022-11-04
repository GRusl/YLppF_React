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

    return (
        <div className={ styles.item }>
            <div>
                <div className={ styles.title }>{ title }</div>
                <ul className={ styles.infoUl }>
                    <li className={ styles.infoLi }>{ author }</li>
                    <li className={ styles.infoLi }>{ genre }</li>
                    <li className={ styles.infoLi }>{ rating } / 5</li>
                </ul>
                <p className={ styles.price }>{ price }₽</p>
            </div>
            <div className={ styles.counterBlock }>
                <button className={ styles.counterBtn }
                        onClick={() => setCount(count - 1)}
                        disabled={count === 0}>-</button>
                <div className={ styles.counterText }>{count}</div>
                <button className={ styles.counterBtn }
                        onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}
