import CategoryItem from "../CategoryItem/CategoryItem";
import "./Home.css";
import useCategory from "../../hooks/useCategory";

function Home() {

    const [category] = useCategory();
    
    return (
        <div className="container welcome-wrapper">
            <div className="row">
                <h2 className="home-title text-center">Welcome to Shop Cart</h2>
                <div className="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList">
                    <CategoryItem itemName="All Products"/>
                    {category && category.map((item) => <CategoryItem itemName={item} key={item}/>)}
                </div>
                <div className="category-title text-center">
                    Select a category to start Shopping
                </div>
            </div>
        </div>
    );
}

export default Home;