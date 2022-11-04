import React, { useEffect, useState } from 'react';
import { storeIDLocalDB } from '../../utilities/storeIDLocalDB';


import Card from '../Card/Card';
import Craft from '../Craft/Craft';
import './Shop.css';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Shop = () => {

    //! Loading Product Data Start
    const products = useLoaderData();
    //! Loading Product Data End









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
            const addedProduct = ((products.find(item => item._id === keyID)))

            // Set product Quantity.
            if (addedProduct) {
                var quantity = returnDataFromDB[keyID];
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







    // !Add item Function Start
    const addItemHandler = (props) => {
     

        // List Of Selected item...
        setSelectedList([...selectedList, props]);



        // Calling it From Utilities...
        storeIDLocalDB(props._id);

    }
    // !Add item Function End







    return (
        <main className='shop-main'>
            <div className='card-div'>

                {products.map(product => <Card addItemHandler={addItemHandler} key={product._id} product={product}></Card>)}

            </div>

            <div className='craft-div'>
                <Helmet><title>Shop</title> </Helmet>

                <Craft selectedList = {selectedList}></Craft>


            </div>
        </main>
    );
};

export default Shop;