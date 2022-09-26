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



    return (
        <main className='shop-main'>
            <div className='card-div'>

                {products.map(product => <Card key={product.id} product={product}></Card>)}

            </div>

            <div className='craft-div'>

                <Craft></Craft>

            </div>
        </main>
    );
};

export default Shop;