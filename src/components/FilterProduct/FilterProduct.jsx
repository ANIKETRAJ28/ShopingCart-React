import { Link } from "react-router-dom";
import "./FilterProduct.css";
import useCategory from "../../hooks/useCategory";
import { useState } from "react";

function FilterProduct({filterSearchProd, clearSearchProd}) {

    const minPriceOptions = [0, 10, 20, 50, 100, 200];
    const maxPriceOptions = [10, 20, 50, 100, 200, 1000];

    const [filterProd] = useCategory();

    const [searchProd, setSearchProd] = useState("");

    return (
        <div className="product-list-sidebar d-flex flex-column">
            <div className="sidebar-title">Search Products</div>
            <div className="sidebar-search form-group">
                <input 
                    type="text" 
                    placeholder="Search by name" 
                    className="form-control" 
                    id="searchInput"  
                    value={searchProd}
                    onChange={(e) => setSearchProd(e.target.value)}
                />
            </div>
            <div className="sidebar-title fw-bold">Categories</div>
            <div id="categoryList">
                {filterProd && filterProd.map((prod) => <Link key={prod} to={`/products/category/${prod}`}>{prod}</Link>)}
            </div>
            <div className="sidebar-title">Filter by price</div>
            <div className="price-filter">
                <div className="price-filter-select d-flex flex-row justify-content-between">
                    <div className="form-group">
                        <select name="minPrice" className="form-select" id="minPrice">
                            {minPriceOptions.map(optionValue => <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <select name="maxPrice" className="form-select" id="maxPrice">
                        {maxPriceOptions.map(optionValue => <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                        </select>
                    </div>
                </div>
                <div className="price-filter-title d-flex flex-row justify-content-start">
                    <div id="price-filter-label-min">Min Price</div>
                    <div id="price-filter-label-max">Max Price</div>
                </div>
            </div>
            <button 
                className="btn btn-warning clear-filter" 
                id="search"
                onClick={() => {
                    filterSearchProd(searchProd);
                    setSearchProd("");
                }}
            >Search</button>
            <button 
                className="btn btn-danger clear-filter" 
                id="clear"
                onClick={() => {
                    clearSearchProd();
                    setSearchProd("");
                }}
            >Clear Filters</button>
        </div>
    );
}

export default FilterProduct;