import "./ProductData.css";
const ProductData = (props) => {

    return (
        <div className="card-container">
            <div className="card">
            <div className="item-name">
                <h1>{props.name}</h1>
            </div>
            <div className="item-discount">
                <h2>{props.title}</h2>
            </div>
            <div className="item-img">
                <img src={props.image} alt=""></img>
            </div>
            <div className="item-price">Start from
                $ {props.price}
                <button className="card-btn" >Add to Cart</button>
            
            </div>
            </div>

           
        </div>
    )

    // return(
    //     <>
    //     <div>
    //         <div>
    //             <h1>{props.}</h1>
    //         </div>
    //         <div>
    //             <h2>{props.title}</h2>
    //         </div>
    //         <div>
    //             <img>{props.image}</img>
    //         </div>
    //         <div>
    //             ${props.price}
    //         </div>
    //         <div>
    //             <button>Add To Cart</button>
    //         </div>
    //     </div>
    //     </>
    // )

}
export default ProductData;