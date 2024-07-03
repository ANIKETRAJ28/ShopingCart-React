import axios from "axios";
import { getCartByUser } from "../apis/fakeStoreApis";

async function findCart(userId, setCartCounter, setCart) {
    const cart = await axios.get(getCartByUser(userId));
    let cartMapping = {};
    cart.data.forEach((date) => {
      const prods = date.products;
      for(let prod in prods) {
        cartMapping[prods[prod].productId] = prods[prod].quantity;
      }
    });
    setCartCounter(Object.entries(cartMapping).length);
    setCart(cart.data);
}

export default findCart;