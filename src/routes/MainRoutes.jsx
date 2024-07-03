import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import ProductList from "../components/Pages/ProductList/ProductList";
import ProductDetails from "../components/Pages/ProductDetails/ProductDetails";
import Login from "../components/LoginSignUp/Login";
import SignUp from "../components/LoginSignUp/SignUp";
import Cart from "../components/Pages/Cart/Cart";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="products/category/:id" element={<ProductList/>}/>
            <Route path="products/:id" element={<ProductDetails/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/cart/:id" element={<Cart/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}

export default MainRoutes;