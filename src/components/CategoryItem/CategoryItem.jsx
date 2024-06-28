import { Link } from "react-router-dom";

import "./CategoryItem.css";

function CategoryItem({ itemName }) {
    return (
        <Link to="/products" className="products">
            <div className="category-item d-flex align-items-center justify-content-center text-white">{itemName}</div>
        </Link>
    )
}

export default CategoryItem;