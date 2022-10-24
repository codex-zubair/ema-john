import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { totalQuantity, totalShippingCharge, totalSum } from '../../utilities/calculation';
import './Craft.css';

const Craft = (props) => {

    const { selectedList } = props;


    // Total Selected List
    const TotalSelectedItem = totalQuantity(selectedList);





    // Total price
    const totalPrice = totalSum(selectedList);


    // Total Shipping Charge.
    const totalShippingCost = totalShippingCharge(selectedList);


    // Total Tax
    const total = (totalPrice + totalShippingCost);
    const tax = (total * 0.1).toFixed(2);



    // Login Route section.
    const navigate = useNavigate();    
    const loginOrder = ()=> {
        navigate('/order')
    }





    return (
        <div className='craft'>
            <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
            <div style={{ marginLeft: '1rem' }}>
                <p>Selected Items: {TotalSelectedItem}</p>
                <p>Total Price: <span>${totalPrice}</span></p>
                <p>Total Shipping Charges: <span>${totalShippingCost}</span></p>
                <p>Tax: <span>${tax}</span></p>
                <h3 style={{ fontSize: '21px' }}>Grand Total: <span>${total}</span></h3>
            </div>

            {/* Button Div Start */}
            <div className='button-div'>
                <button style={{ backgroundColor: 'rgba(255, 48, 48, 1)' }}>Clear Craft <span>icon</span></button>
                <button onClick={loginOrder} style={{ backgroundColor: 'rgba(255, 153, 0, 1)'}}>Review Order <span>icon</span></button>
            </div>
            {/* Button Div End */}
        </div>
    );
};

export default Craft;