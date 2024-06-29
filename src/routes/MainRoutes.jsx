import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import ProductList from "../components/Pages/ProductList/ProductList";
import ProductDetails from "../components/Pages/ProductDetails/ProductDetails";
import Login from "../components/LoginSignUp/Logn";
import SignUp from "../components/LoginSignUp/SignUp";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="products/category/:id" element={<ProductList/>}/>
            <Route path="products/:id" element={<ProductDetails/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}

export default MainRoutes;