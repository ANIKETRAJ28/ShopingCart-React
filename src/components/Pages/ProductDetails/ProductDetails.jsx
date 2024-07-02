import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";
import { getProduct } from "../../../apis/fakeStoreApis";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

function ProductDetails() {

    const {id} = useParams();
    const [prod, setProd] = useState(null);
    const { cart, setCart } = useContext(CartContext);

    async function productDetail() {
        const response = await axios.get(getProduct(id));
        setProd(response.data);
    }

    useEffect(() => {
        productDetail();
    }, [])

    function addingProd() {
        setCart({...cart, products: [...cart.products, id]})
    }

    return (
        prod && <div className="container">
            <div className="row">
                <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                    <div className="product-img d-flex">
                        <img src={prod.image} id="product-img"/>
                    </div>

                    <div className="product-details-box d-flex flex-column">
                        <div id="productDetails">
                            <div className="product-name" id="product-name">{prod.title}</div>
                            <div className="product-price fw-bold" id="product-price">{prod.price}</div>
                            <div className="product-description">
                                <div className="product-description-title fw-bold">Description</div>
                                <div className="product-description-data" id="product-description-data">{prod.description}</div>
                            </div>
                        </div>

                        <div 
                            className="product-details-action btn btn-primary text-decoration-non"
                            onClick={addingProd}
                        >
                            Add to cart
                        </div>
                        <a id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
                            Go to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;