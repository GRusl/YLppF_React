import logo from './shopping-cart.svg';

// import classnames from 'classnames';

import styles from './styles.css';

export const Header = ({title='Магазин'}) => {
    return <header className={styles.header}>
        { title }
        <div className={styles.header}/>
        <img src={logo} alt="logo"/>
    </header>
}
