import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Category from "../components/category/category";
import PriceRange from "../components/priceRange/priceRange";
import Sort from "../components/sort/sort";
import Product from "../components/product/product";
import { setProducts } from "../redux/slices/productSlice";
import "../css/home.css";


function parseData(arr) {
  let res = [];
  let id = 0;
  for (let obj of arr) {
    for (let data of obj.products) {
      data.id = id;
      id += 1;
      res.push(data);
    }
  }
  return res;
}

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = "https://myshopproject.free.mockoapp.net/products";

  useEffect(() => {
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
