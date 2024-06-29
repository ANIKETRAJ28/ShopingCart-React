export function getAllCategories() {
    return "https://fakestoreapi.com/products/categories";
}

export function getCategory(category) {
    if(category == "All Products") return "https://fakestoreapi.com/products";
    return `https://fakestoreapi.com/products/category/${category}`;
}