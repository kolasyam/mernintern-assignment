import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../reducers/ProductsReducer";
import axios from "axios";

const ProductList = () => {
  const dispatch = useDispatch();

  // Fetching products and selected category from Redux state
  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const searchQuery = useSelector((state) => state.products.searchQuery);

  useEffect(() => {
    // Fetch products based on selected category when component mounts or category changes
    const fetchProducts = async () => {
      try {
        let url = "https://dummyjson.com/products";
        if (selectedCategory) {
          url += `/category/${selectedCategory}`;
        }

        const response = await axios.get(url);
        // Ensure products are being set correctly in Redux store
        dispatch(setProducts(response.data.products || []));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory, dispatch]);

  // Check if products is defined and is an array
  if (!products || !Array.isArray(products)) {
    return <div>Loading products...</div>; // Handle the loading state
  }

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render product list
  const cardStyle = {
    transition: "box-shadow 0.3s ease",
  };

  const cardHoverStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
  };

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="col" style={{ cursor: "pointer" }}>
            <div
              className="card h-100"
              style={cardStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow)
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
            >
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <a href={product.url} className="btn btn-primary">
                  View Product
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
