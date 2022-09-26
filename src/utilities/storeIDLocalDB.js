export const storeIDLocalDB = (id)=> 
{
    const craft = localStorage.getItem('craft');
    // ! IF craft Exist...
    if(craft)
    {
        //*("Craft Exist!");
        setID(JSON.parse(craft),id);
    }

    else
    {
        //*("Craft Not Exist! Creating ONE!");
        const craft = {};
        setID(craft,id);
    }
}




// ! Set ID Start
const setID = (craft,id)=> {

    if(id in craft)
    {
        //*("ID Exist!");
        //*("Increased ID Item Value");
        craft[id] = craft[id] + 1;
        localStorage.setItem('craft',JSON.stringify(craft));
    }

    else
    {
        //*("ID Not Exist! Adding ID");
        craft[id] = 1;
        localStorage.setItem('craft',JSON.stringify(craft));

    }

}
// ! Set ID End