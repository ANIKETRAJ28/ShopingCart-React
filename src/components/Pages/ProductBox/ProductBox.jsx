import { Link } from "react-router-dom";

import "./ProductBox.css";

function ProductBox({productImg, productPrice, productName, productId}) {
    return (
        <div className="product-list-box" id="productList">
            <Link to={`/products/${productId}`} className="product-item text-decoration-none">
                <div className="product-img">
                    <img src={productImg}/>
                </div>
                <div className="product-name text-center">{productName}</div>
                <div className="product-price text-center">&#8377; {productPrice}</div>
            </Link>
        </div>
    )
}

export default ProductBox;