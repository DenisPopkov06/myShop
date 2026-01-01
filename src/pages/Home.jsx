import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/slices/productSlice";
import { setActive } from "../redux/slices/headerSlice";
import Category from "../components/category/category";
import PriceRange from "../components/priceRange/priceRange";
import Sort from "../components/sort/sort";
import Product from "../components/product/product";
import parseData from "../utils/parseData";
import "../css/home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = "https://myshopproject.free.mockoapp.net/products";

  useEffect(() => {
    dispatch(setActive("Home"));
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(parseData(data.carts)));
        setLoading(false);
      })
      .catch(() => new Error("error"));
  }, []);

  return (
      <div className="flex-box">
        <Category />
        <div className="flex-box_inside">
          <PriceRange />
          <Sort />
          <div className="products-box">
            <Product loading={loading} />
          </div>
        </div>
      </div>
  );
};

export default Home;
