import React, { Component } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt,
    Switch
} from "react-router-dom";

import Index from "./views/index";
import About from "./views/about";
import Address from "./views/about/address";

const TextCounter = React.lazy(() => import("./components/TextCounter"));

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Prompt
                        when={false}
                        message={(location) => `Tem certeza que deseja ir para ${location.pathname}?`}
                    />
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/" exact component={Index} />
                            <Route path="/about" component={About} />
                            <Route path="/:abc" component={Address} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
