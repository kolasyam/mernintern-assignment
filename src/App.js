
import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./api";
import { setCategories } from "./reducers/categoriesReducer";
import CategorySelector from "./components/CategorySelector";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import './styles.css'
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetchCategories();
      dispatch(setCategories(categories));
    };
    getCategories();
  }, [dispatch]);
  return (
    <div className="container-fluid custom-background">
    <h1 className="text-center ">Product Store</h1>
    <div className="row">
      <div className="col-12 col-md-6 mb-3">
        <SearchBar />
      </div>
      <div className="col-12 col-md-6 mb-3">
        <CategorySelector />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <ProductList />
      </div>
    </div>
  </div>
  );
};

export default App;