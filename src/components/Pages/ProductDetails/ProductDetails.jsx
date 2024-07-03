import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";
import { addProductToCart, getProduct } from "../../../apis/fakeStoreApis";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { UserContext } from "../../../context/UserContext";
import findCart from "../../../helper/findCart";
import { SetCartContext } from "../../../context/SetCartContext";

function ProductDetails() {

    const {id} = useParams();
    const [prod, setProd] = useState(null);
    const { setCart } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const { setCartCounter } = useContext(SetCartContext);

    async function productDetail() {
        const response = await axios.get(getProduct(id));
        setProd(response.data);
    }

    useEffect(() => {
        productDetail();
    }, [])

    async function addToCart() {
        if(!user) return;
        const response = await axios.put(addProductToCart(), {userId: user.id, productId: id});
        findCart(user.id, setCartCounter, setCart);
        navigate(`/cart/${user.id}`);
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

                        <div className="product-details-action btn btn-primary text-decoration-non" onClick={addToCart}>Add to cart</div>
                        <a id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none" onClick={() => navigate(`/cart/${user.id}`)}>Go to cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;