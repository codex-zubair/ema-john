import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {  Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import Craft from '../Craft/Craft';
import OrderCard from '../OrderCard/OrderCard';
import './Order.css';


const Order = () => {


    const navigate = useNavigate();


    // taking user
    const {user} = useContext(AuthContext);


    const location = useLocation();


    


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



    // !Delete Item start 
    const deleteItem = (id) => {
        const remainingItem = selectedList.filter(item => item.id !== id);
        setSelectedList(remainingItem);
        // Storing Remaining Item.
        // localStorage.setItem('craft', JSON.stringify(remainingItem));



        const craft = localStorage.getItem('craft');

        let craftIDObject = JSON.parse(craft);

        // Key Checking inside Object.
        if(id in craftIDObject)
        {
            delete craftIDObject[id];
            // Must Have to Store the Card after Delete other Wise it will be repeat
            localStorage.setItem('craft', JSON.stringify(craftIDObject));
        }
        
     
    }
    // !Delete Item End



    return (
        user? <div className='order-card'>
        <div>
            <Helmet><title>Order</title></Helmet>
            {selectedList.map(product => <OrderCard deleteItem={deleteItem} product={product}></OrderCard>)}
        </div>
        <Craft selectedList={selectedList}></Craft>
    </div> : <Navigate to='/login' state={{from: location}} replace></Navigate>);
};


export default Order;