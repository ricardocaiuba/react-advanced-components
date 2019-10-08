import React, { Component } from 'react';

class TextCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "RRSantos Soluções"
        }

        this.setState = this.setState.bind(this);
    }

    setText(event) {
        this.setState({
            text: event.currentTarget.value
        });
    }
    render() {
        const { state } = this;
        return (
            <div>
                <textarea value={state.text} onChange={this.setText} />
                <p>Text Length: {state.text.length}</p>

            </div>
        );
    }
}

export default TextCounter;
