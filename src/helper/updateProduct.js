import axios from "axios";
import { deleteProduct } from "../apis/fakeStoreApis";
import findCart from "./findCart";
import { useContext } from "react";
import { SetCartContext } from "../context/SetCartContext";
import { CartContext } from "../context/CartContext";

async function updateProduct(user, prod) {

    const { setCartCounter } = useContext(SetCartContext);
    const { setCart } = useContext(CartContext);

    await axios.put(deleteProduct(), {
        userId: user,
        productId: prod,
        quantity: 0
    });
    findCart(user, setCartCounter, setCart);
}

export default updateProduct;