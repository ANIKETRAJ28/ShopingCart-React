import "./ProductList.css";
import ProductBox from "../ProductBox/ProductBox";
import FilterProduct from "../../FilterProduct/FileterProduct";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategory } from "../../../apis/fakeStoreApis";
import axios from "axios";

function ProductList() {

    const {id} = useParams();
    const [items, setItems] = useState(null);

    async function getItems() {
        const response = await axios.get(getCategory(id));
        console.log(response);
        setItems(response.data);
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <div className="container">
            <div className="row">

                <h2 className="product-list-title text-center">All Products</h2>

                <div className="product-list-wrapper d-flex flex-row">
                    <FilterProduct/>
                    <div className="product-list">
                        {
                            items && items.map((item) => <ProductBox key={item.id} productImg={item.image} productPrice={item.price} productDesc={item.title}/>)
                        }
                    </div>
                    {/* <ProductBox productImg="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" productPrice="10000" productDesc="Some product"/> */}
                </div>



            </div>
        </div>
    )
}

export default ProductList;