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
  let products = useSelector((state) => state.productReducer.products);
  const value = useSelector((state) => state.headerReducer.value);
  const price = useSelector((state) => state.priceReducer.price);
  const category = useSelector((state) => state.categoryReducer.category);
  const sort = useSelector((state) => state.sortReducer.status);
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

  const skelet = Array.from({ length: 12 }).map((_, i) => (
    <div className={style.skeleton_wrapper} key={i}>
      <Skeleton />{" "}
    </div>
  ));

  products = products.filter((obj) => {
    const matchesSearch =
      value.trim() === ""
        ? true
        : obj.title.toLowerCase().includes(value.toLowerCase());
    const matchesPrice = obj.price <= price;
    const matchesCategory =
      category === ""
        ? true
        : obj.category?.toLowerCase().trim() === category?.toLowerCase().trim();

    return matchesSearch && matchesPrice && matchesCategory;
  });

  return (
    <div className="flex-box">
      <Category />
      <div className="flex-box_inside">
        <PriceRange />
        <Sort />

        <div className="products-box">
          {loading ? (
            skelet
          ) : products.length ? (
            products
              .sort((a, b) => a[sort] - b[sort])
              .map((obj) => <Product {...obj} key={obj.id} />)
          ) : (
            <div className="empty-products">
              Извините, но таких товаров нет :(
            </div>
          )}{console.log(products)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
