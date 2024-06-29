import "./ProductDetails.css";

function ProductDetails() {
    return (
        <div className="container">
            <div className="row">
                <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                    <div className="product-img d-flex">
                        <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" id="product-img"/>
                    </div>

                    <div className="product-details-box d-flex flex-column">
                        <div id="productDetails">
                            <div className="product-name" id="product-name">Lorem ipsum dolor sit amet.</div>
                            <div className="product-price fw-bold" id="product-price">2542</div>
                            <div className="product-description">
                                <div className="product-description-title fw-bold">Description</div>
                                <div className="product-description-data" id="product-description-data">
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam corporis repudiandae mollitia sequi dicta earum. Sed alias dolor earum eligendi!
                                </div>
                            </div>
                        </div>

                        <div className="product-details-action btn btn-primary text-decoration-non">Add to cart</div>
                        <a id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
                            Go to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;