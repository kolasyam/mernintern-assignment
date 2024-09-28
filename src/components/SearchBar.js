import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../reducers/ProductsReducer";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setQuery(event.target.value);
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search products"
      className="form-control" // Bootstrap form control class
    />
  );
};

export default SearchBar;
