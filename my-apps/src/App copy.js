import React, { Component } from 'react';
import './App.css';

//import Transition from "react-transition-group/Transition"
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myList: []
        };

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add() {
        this.setState(state => ({
            myList: [...state.myList, { id: Date.now().toString() }]
        }));
    }

    remove() {
        const myList = this.state.myList;
        if (myList.length) {
            myList.splice(0, 1);
            this.setState({ myList });
        }
    }

    render() {
        const { state } = this
        return (
            <div>
                <button onClick={this.add}>Add</button>
                <button onClick={this.remove}>Remove</button>
                <TransitionGroup>
                    {
                        state.myList.map(item => {
                            return (
                                <CSSTransition
                                    key={item.id}
                                    timeout={700}
                                    classNames={{
                                        enter: "entrado",
                                        exitActive: "saindo"
                                    }}>

                                    <div
                                        className={"btn"}
                                    >
                                        {item.id}
                                    </div>
                                </CSSTransition>
                            );
                        })
                    }
                </TransitionGroup>
            </div>
        );
    }
}

export default App;
