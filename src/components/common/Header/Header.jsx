// core
import React from 'react';

// library
import { Link } from 'react-router-dom';

// components
import { routes } from "../../App/routes";

// assets
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to={routes.home} className={styles.logo}>
                <h1>Humans</h1>
            </Link>
        </header>
    );
};