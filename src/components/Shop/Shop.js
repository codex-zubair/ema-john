import React, { useEffect, useState } from 'react';
import { storeIDLocalDB } from '../../utilities/storeIDLocalDB';


import Card from '../Card/Card';
import Craft from '../Craft/Craft';
import './Shop.css';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


// Count system depends on
// Count || TICK
// Page
// Per page





const Shop = () => {

    //! Loading Product Data Start
    const {products,count} = useLoaderData();
    //! Loading Product Data End


    // !Selected List Start
    const [selectedList, setSelectedList] = useState([]);
    // !Selected List End


    // Current page
    const [page, setCurrentPage] = useState(0);

    // Set Size of per page
    const [size, setSize] = useState(10);


    //  total pages 
    const pages = Math.ceil(count/ size);




    // const per page 
    const perPage = 10;



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
            <p className='pagination'>Currently page {page}</p>

            <div className='pagination'>{[...Array(pages).keys()].map(number=> <button onClick={()=> setCurrentPage(number)} className={page === number? 'selected': 'pagination-btn'} key={number}>{number}</button>)}</div>
        </main>
    );
};

export default Shop;