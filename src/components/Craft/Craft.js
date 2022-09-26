import React from 'react';
import './Craft.css';

const Craft = (props) => {
    return (
        <div className='craft'>
            <h2 style={{textAlign:'center'}}>Order Summary</h2>
            <div style={{marginLeft:'1rem'}}>
            <p>Total Price: <span>${props.price}</span></p>
            <p>Total Shipping Charges: <span>${props.shipping}</span></p>
            <p>Tax: <span>${props.tax}</span></p>
            <h3 style={{fontSize:'21px'}}>Grand Total: <span>${props.total}</span></h3>
            </div>
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