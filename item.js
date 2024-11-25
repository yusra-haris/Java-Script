const item = {
    name : "Scarf" ,
    price : 1000,
    quantity : 5,
    category : "Apparel",
};

const {name, price, quantity, category} = item ;
const itemdetails= ({name, price,quantity,category}) => {
    message = `Product Name : ${name} , 
belongs to ${category} category.
It costs $${price}. Hurry up & orders yours now. Only ${quantity} left in stock !!`;
    return message;
};
console.log(itemdetails(item));

const updatequantity = ({name ,quantity}) => {
    quantity = quantity +1;
    newmessage = `
    
    
${ name } has ben restocked !!
Quantity available : ${quantity}`;
return newmessage;
}
console.log(updatequantity(item))