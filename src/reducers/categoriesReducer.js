const initialState = {
    categories: [],
    selectedCategory: ''
};

// Action Types
const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

// Action Creators
export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
});

export const setSelectedCategory = (category) => ({
    type: SET_SELECTED_CATEGORY,
    payload: category
});

// Reducer
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            };
        default:
            return state;
    }
};

export default categoriesReducer;
