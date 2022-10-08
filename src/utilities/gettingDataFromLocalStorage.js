export const gettingDataFromLocalStorage = (products)=> 
{




    const returnDataFromDB = JSON.parse(localStorage.getItem('craft'));

    // TODO Returning Same ID
    // ! Return Data Start

    // Saved Card with quantity...
    const savedCard = [];

    // Looping the return  ID
    for (const keyID in returnDataFromDB) {

        // Finding The product using ID
        const addedProduct = ((products.find(item => item.id === keyID)))

        // Set product Quantity.
        if (addedProduct) {
            const quantity = returnDataFromDB[keyID];
            addedProduct.quantity = quantity;
            // push The Product into card array.
            savedCard.push(addedProduct);
        }

        return savedCard;
}}