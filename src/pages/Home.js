import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../components/category/category";
import PriceRange from "../components/priceRange/priceRange";
import Sort from "../components/sort/sort";
import Skeleton from "../components/skeleton/skeleton";
import { setProducts } from "../redux/slices/productSlice";

import "../css/home.css";
import style from "../components/skeleton/skeleton.module.css";
import Product from "../components/product/product";

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
  const products = useSelector((state) => state.productReducer.products);
  const value = useSelector((state) => state.headerReducer.value);
  const price = useSelector((state) => state.priceReducer.price);
  const category = useSelector((state) => state.categoryReducer.category);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = "https://myshopproject.free.mockoapp.net/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(parseData(data.carts)));
        setLoading(false)
      })
      .catch(() => new Error("error"));
  }, []);
   
console.log(price);

  return (
    <div className="flex-box">
      <Category />
      <div className="flex-box_inside">
        <PriceRange />
        <Sort />
        <div className="products-box">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => (
                <div className={style.skeleton_wrapper} key={i}>
                  <Skeleton />{" "}
                </div>
              ))
            : products
                .filter((obj) => {
                  const matchesSearch =
                    value.trim() === ""
                      ? true
                      : obj.title.toLowerCase().includes(value.toLowerCase());
                  const matchesPrice = obj.price <= price;
                  const matchesCategory =
                    category === ""
                      ? true
                      : obj.category?.toLowerCase().trim() ===
                        category?.toLowerCase().trim();
                  return matchesSearch && matchesPrice && matchesCategory;
                })
                .map((obj) => (
                  <Product {...obj} key={obj.id}/>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
