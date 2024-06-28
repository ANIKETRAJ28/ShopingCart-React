import { Link } from "react-router-dom";
import "./ProductList.css";
import ProductBox from "../ProductBox/ProductBox";

function ProductList() {
    return (
        <div className="container">
            <div className="row">

                <h2 className="product-list-title text-center">All Products</h2>

                <div className="product-list-wrapper d-flex flex-row">
                    <div className="product-list-sidebar d-flex flex-column">
                        <div className="sidebar-title">Search Products</div>
                        <div className="sidebar-search form-group">
                            <input type="text" placeholder="Search by name" className="form-control" id="searchInput"/>
                        </div>
                        <div className="sidebar-title fw-bold">Categories</div>
                        <div id="categoryList">
                        </div>
                        <div className="sidebar-title">Filter by price</div>
                        <div className="price-filter">
                            <div className="price-filter-select d-flex flex-row justify-content-between">
                                <div className="form-group">
                                    <select name="minPrice" className="form-select" id="minPrice">
                                        <option value="0">0</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                        <option value="200">200</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select name="maxPrice" className="form-select" id="maxPrice">
                                        <option value="0">0</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                        <option value="200">200</option>
                                        <option value="1000">1000</option>
                                    </select>
                                </div>
                            </div>
                            <div className="price-filter-title d-flex flex-row justify-content-start">
                                <div id="price-filter-label-min">Min Price</div>
                                <div id="price-filter-label-max">Max Price</div>
                            </div>
                        </div>
                        <button className="btn btn-warning clear-filter" id="search">Search</button>
                        <button className="btn btn-danger clear-filter" id="clear">Clear Filters</button>
                    </div>
                    <ProductBox productImg="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" productPrice="10000" productDesc="Some product"/>
                </div>



            </div>
        </div>
    )
}

export default ProductList;