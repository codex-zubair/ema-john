import React from 'react';
import './Craft.css';

const Craft = () => {
    return (
        <div className='craft'>
            <h2>Order Summary</h2>
            <p>Total Price: <span>$1000</span></p>
            <p>Total Shipping Charges: <span>$10</span></p>
            <p>Tax: <span>$114</span></p>
            <h3 style={{fontSize:'21px'}}>Grand Total: <span>$1500</span></h3>
            {/* Button Div Start */}
            <div className='button-div'>
            <button style={{backgroundColor:'rgba(255, 48, 48, 1)'}}>Clear Craft <span>icon</span></button>
            <button style={{backgroundColor:'rgba(255, 153, 0, 1)'}}>Review Order <span>icon</span></button>
            </div>
            {/* Button Div End */}
        </div>
    );
};

export default Craft;