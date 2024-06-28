import "./ProductList.css";
import ProductBox from "../ProductBox/ProductBox";
import FilterProduct from "../../FilterProduct/FileterProduct";

function ProductList() {
    return (
        <div className="container">
            <div className="row">

                <h2 className="product-list-title text-center">All Products</h2>

                <div className="product-list-wrapper d-flex flex-row">
                    <FilterProduct/>
                    <ProductBox productImg="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" productPrice="10000" productDesc="Some product"/>
                </div>



            </div>
        </div>
    )
}

export default ProductList;