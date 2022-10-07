import React, { useEffect, useState } from 'react';
import { storeIDLocalDB } from '../../utilities/storeIDLocalDB';
import { totalQuantity, totalShippingCharge, totalSum } from '../../utilities/calculation';


import Card from '../Card/Card';
import Craft from '../Craft/Craft';
import './Shop.css';

const Shop = () => {

    //! Loading Product Data Start
    const [products, setProduct] = useState([]);



    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(productData => {
                setProduct(productData)
                // console.log("one");
            })
            .catch(error => console.log(error));

    }, [])
    //! Loading Product Data End










    // !Selected List Start
    const [selectedList, setSelectedList] = useState([]);
    // !Selected List End


    // Total Selected List
    const TotalSelectedItem = totalQuantity(selectedList);
    // const TotalSelectedItem = selectedList.length;
    // const TotalSelectedItem  = 1;





    // Total price
    const totalPrice = totalSum(selectedList);


    // Total Shipping Charge.
    const totalShippingCost = totalShippingCharge(selectedList);


    // Total Tax
    const total = (totalPrice + totalShippingCost);
    const tax = (total * 0.1).toFixed(2);







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







    // !Add item Function Start
    const addItemHandler = (props) => {

        // List Of Selected item...
        setSelectedList([...selectedList, props]);


        // Calling it From Utilities...
        storeIDLocalDB(props.id);

    }
    // !Add item Function End













    return (
        <main className='shop-main'>
            <div className='card-div'>

                {products.map(product => <Card addItemHandler={addItemHandler} key={product.id} product={product}></Card>)}

            </div>

            <div className='craft-div'>

                <Craft item={TotalSelectedItem} tax={tax} total={total} price={totalPrice} shipping={totalShippingCost}></Craft>


            </div>
        </main>
    );
};

export default Shop;