import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Category from "../components/category/category";
import PriceRange from "../components/priceRange/priceRange";
import Sort from "../components/sort/sort";
import Skeleton from "../components/skeleton/skeleton";
import { setProducts, setHoveredId } from "../redux/slices/productSlice";
import like from "../img/like.png";
import star from "../img/product-raiting.png";
import "../css/home.css";
import style from "../components/skeleton/skeleton.module.css";

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
  const hoveredId = useSelector((state) => state.productReducer.hoveredId);
  const value = useSelector((state) => state.headerReducer.value);
  const price = useSelector((state) => state.priceReducer.active);
  const category = useSelector((state) => state.categoryReducer.category);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = "https://myshopproject.free.mockoapp.net/products";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(parseData(data.carts)));
        setLoading(false)
      })
      .catch(() => new Error("error"));
  }, [dispatch]);
  

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
                  <div className="product" key={obj.id}>
                    <div
                      className="head-product-info"
                      onMouseEnter={() => dispatch(setHoveredId(obj.id))}
                      onMouseLeave={() => dispatch(setHoveredId(null))}
                    >
                      <span className="discountPercentage">
                        -{obj.discountPercentage}%
                      </span>
                      <button className="wishlistBtn">
                        <img src={like} alt="like" />
                      </button>
                      <img
                        src={obj.thumbnail}
                        alt="img"
                        className="product-img"
                        loading="lazy"
                      />{" "}
                      {hoveredId === obj.id && (
                        <button className="addToCartBtn">Add To Cart</button>
                      )}
                    </div>
                    <div className="product-title">{obj.title}</div>
                    <div className="product-price">
                      {"$" +
                        (
                          obj.price -
                          (obj.price / 100) * obj.discountPercentage
                        ).toFixed(2)}{" "}
                      <span>{"$" + obj.price}</span>
                      <div className="product-rating">
                        {Array.from({ length: obj.quantity }).map((_, i) => (
                          <img src={star} key={i} alt="star" />
                        ))}{" "}
                        <span>({Math.round(obj.total)})</span>
                      </div>
                    </div>
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
