import { Link } from "react-router-dom";

import "./ProductBox.css";

function ProductBox({productImg, productPrice, productDesc}) {
    return (
        <div className="product-list-box" id="productList">
            <Link to="/products/1" className="product-item text-decoration-none d-inline-block">
                <div className="product-img">
                    <img src={productImg}/>
                </div>
                <div className="product-name text-center">{productDesc}</div>
                <div className="product-price text-center">&#8377; {productPrice}</div>
            </Link>
        </div>
    )
}

export default ProductBox;