import logo from './shopping-cart.svg';

import classnames from 'classnames';

import styles from './styles.module.css';

export const Header = ({title='Магазин'}) => {
    return (
        <header className={ styles.header }>
            <a className={ styles.title } href="/">{ title }</a>
            <img className={ classnames(styles.right, styles.icon) } src={ logo } alt="logo"/>
        </header>
    )
}
