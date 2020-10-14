// core
import React from "react";

// library
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

// components
import { App } from "./components/App/App";

// assets
import './index.scss'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById("root"));
