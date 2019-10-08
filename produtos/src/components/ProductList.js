import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Channel } from "../services/EventService";

class ProductList extends Component {
    static defaultProps = {
        products: []
    }

    remove(product) {
        Channel.emit("product.remove", product.id);
    }

    render() {
        const { props } = this;

        return (
            <ul className="product-list">
                <TransitionGroup>
                    {
                        props.products.map(p => (
                            <CSSTransition
                                key={p.id}
                                timeout={500}
                                classNames="product"
                            >
                                <li className="product-list-item">
                                    <button onClick={this.remove.bind(this, p)}>X</button>
                                    <img src={p.image} alt={p.description} />
                                    <div>{p.description}</div>
                                    <div>{p.price}</div>
                                </li>
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
            </ul>
        );
    }
}

export default ProductList;
