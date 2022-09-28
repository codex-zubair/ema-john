import React, { useEffect, useState } from 'react';
import { storeIDLocalDB } from '../../utilities/storeIDLocalDB';
import { totalShippingCharge, totalSum } from '../../utilities/calculation';


import Card from '../Card/Card';
import Craft from '../Craft/Craft';
import './Shop.css';

const Shop = () => {

    //! Loading Product Data Start
    const [products, setProduct] = useState([]);



    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(productData => setProduct(productData))
            .catch(error => console.log(error));
    }, [])
    //! Loading Product Data End

    // TODO Removed Later.
    //! Added Item List Start
    const [addedItem, setAddedItem] = useState([]);
    //! Added Item List End



    // Destructuring...
    const { name, price, shipping } = addedItem;




    




    // !Selected List Start
    const [selectedList, setSelectedList] = useState([]);
    // !Selected List End

   

    // Total Selected List
    const TotalSelectedItem = selectedList.length;


    // Total price
    const totalPrice = totalSum(selectedList);


    // Total Shipping Charge.
    const totalShippingCost = totalShippingCharge(selectedList);
  

    // Total Tax
    const total = totalPrice + totalShippingCost;
    const tax = (total * 0.1).toFixed(2);



    // !Add item Function Start
    const addItemHandler = (props) => {
        
        // List Of Selected item...
        setSelectedList([...selectedList,props]);


        // Calling it From Utilities...
        storeIDLocalDB(props.id);



        // TODO Remove IT
        // !Missing Part
        setAddedItem(props)

    }
    // !Add item Function End







    return (
        <main className='shop-main'>
            <div className='card-div'>

                {products.map(product => <Card addItemHandler={addItemHandler} key={product.id} product={product}></Card>)}

            </div>

            <div className='craft-div'>

                <Craft item={TotalSelectedItem} tax={tax} total={total} name={name} price={totalPrice} shipping={totalShippingCost}></Craft>


            </div>
        </main>
    );
};

export default Shop;