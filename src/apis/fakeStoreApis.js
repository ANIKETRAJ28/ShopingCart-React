export function getAllCategories() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/categories`;
}

export function getCategory(category) {
    if(category == "All Products") return `${import.meta.env.VITE_FAKE_STORE_URL}/products`;
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/category/${category}`;
}

export function getProduct(id) {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/${id}`;
}

export function userSignUp() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/users`;
}

export function userLogin() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/auth/login`;
}

export function getCartByUser(id) {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts/user/${id}`;
}

export function addProductToCart() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts`;
}

export function deleteProduct() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts/updateProduct`
}