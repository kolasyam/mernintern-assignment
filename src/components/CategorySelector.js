import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../reducers/categoriesReducer";

const CategorySelector = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const handleCategoryChange = (event) => {
    dispatch(setSelectedCategory(event.target.value));
  };

  return (
    <div className="mb-3 d-flex align-items-center">
      <label htmlFor="category-select" className="form-label mb-0 me-2">
        Select a category:
      </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="form-select"
        style={{width:"80%"}}
      >
        <option value="">All Categories</option>
        {Array.isArray(categories) &&
          categories.map((category) => (
            <option key={category.id || category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CategorySelector;
