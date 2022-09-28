import React, { useEffect, useState } from 'react';
import { storeIDLocalDB } from '../../utilities/storeIDLocalDB';
import { totalShippingCharge, totalSum } from '../../utilities/calculation';


import Card from '../Card/Card';
import Craft from '../Craft/Craft';
import './Shop.css';
import { getDataFromDB } from '../../utilities/getDataFromDB';

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




    const [returnDataFromDB, setReturnDataFromDB] = useState([]);



    // TODO Returning Same ID
     // ! Return Data Start
     //  console.log(Object.entries(returnDataFromDB).map(id=> id[0]));
     for (const keyID in returnDataFromDB)
     {

        const product = products.find(item => item.id = keyID
);
        console.log("working")
        console.log(product.name);
    }
    // ! Return Data End






    // ! Getting Data From Local Storage.
    useEffect(()=> {
        setReturnDataFromDB(JSON.parse(localStorage.getItem('craft')));
    },[selectedList])



    // !Add item Function Start
    const addItemHandler = (props) => {
        
        // List Of Selected item...
        setSelectedList([...selectedList,props]);


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