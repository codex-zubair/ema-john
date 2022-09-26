import React from 'react';
import './Card.css';

const Card = (props) => {

    const {img, name, price, seller, ratings } = props.product;
        const {addItemHandler} = props;

        

    return (
        <div className='card'>
            <img onError={(error)=>{error.target.src="https://cdn.questionpro.com/userimages/site_media/no-image.png"}}
             style={{ height: '286px', width: '286px', paddingLeft: '7px', paddingRight: '7px', paddingTop: '8px', borderRadius: '8px' }} src={img} alt='img' />
            {/* Card Info Div Start */}
            <div className='card-info'>
                {/* Product Info div Start */}
                <div>
                <h3 style={{ fontSize: '21px', marginTop:'12px' , marginBottom:'0px'}}>{name.slice(0,20)}</h3>
                <h4 style={{ fontSize: '17px' , marginTop:'11px', marginBottom:'0px'}}>price: ${price}</h4>
                </div>
                {/* Product Info div End */}

                {/* Seller Info Div Start */}
                <div style={{marginTop:'22px'}}>
                    <p style={{ fontSize: '12px', fontWeight:'500'}}>Manufacturer : {seller}</p>
                    <p style={{ fontSize: '12px', fontWeight:'500'}}>Rating : {ratings} starts</p>
                </div>
                {/* Seller Info Div End */}
            </div>
            {/* Card Info Div End */}
            <button onClick={()=> addItemHandler(props.product)} className='card-button'>Add to Cart icon</button>
        </div>
    );
};

export default Card;