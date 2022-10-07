export const totalSum = (products) => {

   return products.reduce((previous, current) => {
        if(current.quantity === 0)
        {current.quantity = 1;}
        return ((previous + current.price) * current.quantity);
    }, 0)
    
};


export const totalShippingCharge = (products)=>
{
    return products.reduce((previous, current) => {
        if(current.quantity === 0)
        {current.quantity = 1;}
        return ((previous + current.shipping) * current.quantity);
    }, 0)
    
}



export const totalQuantity = (products) =>
{
    return products.reduce((previous, current) => {
        return (previous + current.quantity);
    },0); 
}