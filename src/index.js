// core
import React from "react";

// library
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

// components
import { App } from "./components/App/App";
import { store } from './init/store';

// assets
import './index.scss'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById("root"));
