export const totalSum = (products) => {

   return products.reduce((previous, current) => {
        return previous + current.price;
    }, 0)
    
};


export const totalShippingCharge = (products)=>
{
    return products.reduce((previous, current) => {
        return previous + current.shipping;
    }, 0)
    
}

