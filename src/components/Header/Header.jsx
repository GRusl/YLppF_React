import logo from '../../static/shopping-cart.svg';

import classnames from 'classnames';

import styles from './styles.module.css';

import React from 'react';
import {Link} from "react-router-dom";

export const Header = ({title='Магазин'}) => {
    return (
        <header className={ styles.header }>
            <Link className={ styles.title } to="/">{ title }</Link>
            <Link to={'/cart'}><img className={ classnames(styles.right, styles.icon) } src={ logo } alt="logo"/></Link>
        </header>
    )
}
