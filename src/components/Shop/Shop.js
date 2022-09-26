import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Craft from '../Craft/Craft';
import './Shop.css';

const Shop = () => {

    //! Loading Product Data Start
    const [products, setProduct] = useState([]);
    console.log(products);


    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(productData => setProduct(productData))
            .catch(error => console.log(error));
    }, [])
    //! Loading Product Data End


    //! Added Item List Start
    const [addedItem, setAddedItem] = useState([]);
    //! Added Item List End


    const {name, price, shipping} = addedItem;

    // !Add item Function Start
    const addItemHandler = (props)=> {
        setAddedItem(props)
    }
    // !Add item Function End


    // Total Price
    const total = price + shipping;
    const tax = (total * 0.1).toFixed(2);
    


    return (
        <main className='shop-main'>
            <div className='card-div'>

                {products.map(product => <Card addItemHandler = {addItemHandler} key={product.id} product={product}></Card>)}

            </div>

            <div className='craft-div'>

                <Craft tax= {tax} total = {total} name = {name} price = {price} shipping = {shipping}></Craft>
               

            </div>
        </main>
    );
};

export default Shop;