import React, { Component } from 'react';

import { ProductService } from "../services/ProductService";
import { Channel } from "../services/EventService";
import ProductList from '../components/ProductList';

class ProductListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }

        this.startData = this.startData.bind(this);
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.startData();
        Channel.on("product.remove", this.remove);
    }

    componentWillUnmount() {
        Channel.removeListener("product.remove", this.remove);
    }

    async startData() {
        const products = await ProductService.list();
        this.setState({ products });
    }

    async remove(productId) {
        const { products } = this.state,
            productIndex = products.findIndex(p => p.id === productId);

        await ProductService.remove(productId);
        products.splice(productIndex, 1);
        this.setState({ products });


    }

    render() {
        const { state } = this;
        return (
            <div className="container">
                <h1>Lista de Produtos</h1>
                <ProductList products={state.products} />
            </div>
        );
    }
}

export default ProductListView;
