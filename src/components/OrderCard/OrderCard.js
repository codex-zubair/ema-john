import React from 'react';
import './OrderCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';


const OrderCard = ({product}) => {

    const {name, price, img, shipping,id} = product;

    console.log(product);
    return (
        <div className='order-card-div'>
            <div style={{display: 'flex'}}>

                <div>
                    <img src={img} alt="img" />
                </div>


                <div>
                    <h3>{name}</h3>
                    <p>Price: $<span>{price}</span></p>
                    <p>Shipping Charge: $<span>{shipping}</span></p>
                </div>


                </div>


               
               <div>
               <button><FontAwesomeIcon icon={faDeleteLeft} /></button>
               </div>
              
        </div>
    );
};

export default OrderCard;