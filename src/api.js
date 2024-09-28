const BASE_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (category, page = 1) => {
    const response = await fetch(`${BASE_URL}?limit=10&skip=${(page - 1) * 10}&category=${category}`);
    return response.json();
};

export const fetchCategories = async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    return response.json();
};
