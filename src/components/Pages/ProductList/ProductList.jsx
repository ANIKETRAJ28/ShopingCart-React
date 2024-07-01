import "./ProductList.css";
import ProductBox from "../ProductBox/ProductBox";
import FilterProduct from "../../FilterProduct/FilterProduct";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategory } from "../../../apis/fakeStoreApis";
import axios from "axios";

function ProductList() {

    const {id} = useParams();
    const [items, setItems] = useState(null);
    const [clearProd, setClearProd] = useState(false);

    async function getItems() {
        const response = await axios.get(getCategory(id));
        setItems(response.data);
    }

    function filterSearchProd(prod) {
        prod && setItems(items.filter((item) => item.title == prod));
    }

    function clearSearchProd() {
        setClearProd(!clearProd);
    }

    useEffect(() => {
        getItems();
    }, [id, clearProd])

    return (
        <div className="container">
            <div className="row">

                <h2 className="product-list-title text-center">All Products</h2>

                <div className="product-list-wrapper d-flex flex-row">
                    <FilterProduct filterSearchProd={filterSearchProd} clearSearchProd={clearSearchProd}/>
                    <div className="product-list">
                        {
                            items && items.map((item) => <ProductBox key={item.id} productImg={item.image} productPrice={item.price} productName={item.title} productId={item.id}/>)
                        }
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ProductList;