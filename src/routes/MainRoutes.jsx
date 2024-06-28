import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}

export default MainRoutes;