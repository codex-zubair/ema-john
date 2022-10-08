import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Craft from '../Craft/Craft';
import OrderCard from '../OrderCard/OrderCard';
import './Order.css';


const Order = () => {

  
    const products = useLoaderData();

  
    // !Selected List Start
    const [selectedList, setSelectedList] = useState([]);
    // !Selected List End








    


    // ! Getting Data From Local Storage.
    useEffect(() => {

        const returnDataFromDB = JSON.parse(localStorage.getItem('craft'));

        // TODO Returning Same ID
        // ! Return Data Start

        // Saved Card with quantity...
        const savedCard = [];

        // Looping the return  ID
        for (const keyID in returnDataFromDB) {

            // Finding The product using ID
            const addedProduct = ((products.find(item => item.id === keyID)))

            // Set product Quantity.
            if (addedProduct) {
                const quantity = returnDataFromDB[keyID];
                addedProduct.quantity = quantity;
                // push The Product into card array.
                savedCard.push(addedProduct);
            }

            // console.log(savedCard);

            // *Sending Saved card into selected card.
            setSelectedList(savedCard);



        }
        // ! Return Data End
    }, [products])
    // ! Getting Data From Local Storage.

    return (
        <div className='order-card'>
            <div>
            {selectedList.map(product => <OrderCard product= {product}></OrderCard>)}
            </div>
            <Craft selectedList = {selectedList}></Craft>
        </div>
    );
};

export default Order;