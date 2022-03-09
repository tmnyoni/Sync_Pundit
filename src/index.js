// Imports.
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Page404 from 'components/404';
import App from 'App';
import "./index.css";
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
    <Router>
        <Routes>
            <Route
                exact path="/"
                element={<App />}
            />

            <Route
                path="*"
                element={<Page404 />}
            />
        </Routes>
    </Router>
    ,
    document.getElementById('root')
);