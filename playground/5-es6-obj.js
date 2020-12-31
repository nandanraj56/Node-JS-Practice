const product = {
    label:'Acer laptop',
    price: 49000,
    stock:4,
    salePrice: undefined,
    rating: 4.2,
}
//Onject destructing
//const {label:productLabel, price, rating=5} = product;
//console.log(productLabel,rating)

////Object destructing in function
const transaction = (type,{rating}) =>{
    //const {rating} = myProduct;
    console.log(rating);
}

transaction('order',product);