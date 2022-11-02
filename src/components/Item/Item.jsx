// import styles from './styles.module.css';

export const Item = (
    {
        title='Название',
        rating= 0,
        price= 0,
        genre='Жанр',
        author='Автор'
    }) => {
    return <div>
        <h2>{ title }</h2>
        <ul>
            <li>{ author }</li>
            <li>{ genre }</li>
            <li>{ rating }</li>
        </ul>
        <p>{ price }₽</p>
    </div>
}
