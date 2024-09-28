const initialState = {
    products: [],
    searchQuery: ''
};

// Action Types
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

// Action Creators
export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});

export const setSearchQuery = (query) => ({
    type: SET_SEARCH_QUERY,
    payload: query
});

// Reducer
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            };
        default:
            return state;
    }
};

export default productsReducer;
