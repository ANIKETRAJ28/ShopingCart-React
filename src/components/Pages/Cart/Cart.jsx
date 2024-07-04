import { useContext, useEffect, useState } from "react";
import OrderDetailsProduct from "../../OrderDetailsProduct/OrderDetailsProduct";
import "./Cart.css";
import { CartContext } from "../../../context/CartContext";
import axios from "axios";
import { deleteProduct, getProduct } from "../../../apis/fakeStoreApis";
import findCart from "../../../helper/findCart";
import { SetCartContext } from "../../../context/SetCartContext";

function Cart() {

    const { cart, setCart } = useContext(CartContext);
    const [product, setProduct] = useState([]);
    const { setCartCounter } = useContext(SetCartContext);

    async function downloadProduct(cart) {
        let newProducts = [];
        let newProductMapping = {};
        for(let prod in cart) {
            const prodObj = cart[prod];
            const itemObj = prodObj['products'];
            for(let item in itemObj) {
                const newProd = itemObj[item];
                newProducts.push(newProd.productId);
                newProductMapping[newProd.productId] = newProd.quantity;
            }
        }
        let promiseProduct = newProducts.map(product => axios.get(getProduct(product)));
        promiseProduct = await axios.all(promiseProduct);
        promiseProduct = promiseProduct.map(prod => ({...prod.data, quantity: newProductMapping[prod.data.id]}));
        setProduct(promiseProduct);
    }

    async function updateProd(user, prod, quant) {
        await axios.put(deleteProduct(), {
            userId: user,
            productId: prod,
            quantity: quant
        });
        findCart(user, setCartCounter, setCart)
    }

    useEffect(() => {
        downloadProduct(cart);
    }, [cart])

    return (
        <div className="container">
            <div className="row">
                <h2 className="cart-title text-center">Your cart</h2>
                <div className="cart-wrapper d-flex flex-row">
                    <div className="order-details d-flex flex-column" id="orderDetails">
                        <div className="order-details-title fw-bold">Order Details</div>
                        {product && product.map((prod) => <OrderDetailsProduct key={prod.id} image={prod.image} description={prod.title} price={prod.price} quantity={prod.quantity} productId={prod.id} updateProd={updateProd}/>)}
                    </div>

                    <div className="price-details d-flex flex-column" id="priceDetails">
                        <div className="price-details-box">

                            <div className="price-details-title fw-bold">Price Details</div>
                            <div className="price-details-data">
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Price</div>
                                    <div id="total-price"></div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Discount</div>
                                    <div>10</div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Delivery Charges</div>
                                    <div>FREE</div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Total</div>
                                    <div id="net-price"></div>
                                </div>
                            </div>

                        </div>
                        <div className="price-details-btn-group">
                            <a href="productList.html" className="continue-shopping-btn btn btn-info text-decoration-none">
                                Continue Shopping
                            </a>
                            <a href="checkout.html" className="checkout-btn btn btn-primary text-decoration-none">
                                Checkout
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;