import React from 'react';
import './Craft.css';

const Craft = () => {
    return (
        <div className='craft'>
            <h2>Order Summary</h2>
            <p>Total Price <span>$1000</span></p>
            <p>Total Shipping Charges <span>$10</span></p>
            <p>Tax <span>$114</span></p>
            <h3>Grand Total: <span>$1500</span></h3>
            <button>Clear Craft <span>icon</span></button>
            <button>Review Order <span>icon</span></button>
        </div>
    );
};

export default Craft;