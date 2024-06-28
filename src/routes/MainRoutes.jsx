import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import ProductList from "../components/Pages/ProductList/ProductList";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="products" element={<ProductList/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}

export default MainRoutes;