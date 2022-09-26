import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
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
                <div>
                    <h2>Order Summary</h2>
                    <p>Total Price <span>$1000</span></p>
                    <p>Total Shipping Charges <span>$10</span></p>
                    <p>Tax <span>$114</span></p>
                    <h3>Grand Total: <span>$1500</span></h3>
                    <button>Clear Craft <span>icon</span></button>
                    <button>Review Order <span>icon</span></button>
                </div>

            </div>
        </main>
    );
};

export default Shop;