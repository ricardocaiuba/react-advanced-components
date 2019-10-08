import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"
import NewProductView from "./views/NewProductView";
import ProductListView from './views/ProductListView';


function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <header>
                        <ul className="link-list">
                            <li>
                                <Link className="btn btn-outline-primary" to={"/"}>Novo</Link>
                            </li>
                            <li>
                                <Link className="btn btn-outline-primary" to={"/list"}>Lista</Link>
                            </li>
                        </ul>
                    </header>
                    <div>
                        <Route path={"/"} exact component={NewProductView} />
                        <Route path={"/list"} component={ProductListView} />
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
