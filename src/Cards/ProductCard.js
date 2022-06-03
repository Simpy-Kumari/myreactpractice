import React from "react";
import Card from './Card';

const ProductCard = () => {

    const items =[
        {
            name: "Laptop",
            title:"Upto 55% off",
            image: 'images/Laptopsmall.jpg',
            price: 60000,
            
        },
        {
            name:"Mobile",
            title:"Upto 20% off",
            image: "images/Mobileimg.jpg",
            price:20000
        },
        {
            name:"Headphone",
            title:"Upto 30% off",
            image: "images/Headphoneimg.jpg",
            price:5000
        },
        {
            name:"Televison",
            title:"Upto 60% off",
            image: "images/Televisionimg.jpg",
            price:35000
        },
    ]
    return(
        <Card productItems={items}/>
    )
}
export default ProductCard;