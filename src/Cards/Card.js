import React from "react";
import ProductData from "./ProductData";

const Card = (props) => {
    return(
        <>
        <section className="main-card--cointainer">
        {
            props.productItems.map((items) => 
                ( <ProductData 
                    name={items.name}
                    title={items.title}
                    image={items.image}
                    price={items.price}
                    />
                )
            )
        }
        </section>
        </>
    );
}


export default Card;