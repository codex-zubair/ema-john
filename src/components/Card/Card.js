import React from 'react';
import './Card.css';

const Card = (props) => {

    const { img, name, price, seller, ratings } = props.product;

    return (
        <div className='card'>
            <img style={{ height: '286px', width: '286px' }} src={img} alt='img' />
            <h3 style={{ fontSize: '20px' }}>{name}</h3>
            <h4 style={{ fontSize: '16px' }}>price: ${price}</h4>
            <p style={{ fontSize: '12px' }}>Manufacturer : {seller}</p>
            <p style={{ fontSize: '12px' }}>Rating : {ratings} start</p>
            <button style={{ width: '100%', backgroundColor: 'rgba(255, 224, 179, 1)' }}>Add to Cart icon</button>
        </div>
    );
};

export default Card;