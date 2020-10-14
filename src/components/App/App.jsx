// core
import React from 'react';

// library
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import { Header } from "../common";
import { Home } from "../pages";
import { routes } from './routes';

import styles from './App.module.scss';

export const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main}>
                <Switch>
                    <Redirect exact from='/' to={routes.home} />
                    <Route path={routes.home} component={Home} />
                </Switch>
            </main>
        </div>
    );
};