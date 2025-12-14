import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Category from "../components/category/category";
import PriceRange from "../components/priceRange/priceRange";
import Sort from "../components/sort/sort";
import { setProducts, setHoveredId } from "../redux/slices/productSlice";
import like from "../img/like.png";
import star from "../img/product-raiting.png";
import "../css/home.css";

const Home = () => {
  const products = useSelector((state) => state.productReducer.products);
  const hoveredId = useSelector((state) => state.productReducer.hoveredId);
  const dispatch = useDispatch();
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data.products)))
      .catch(() => new Error("error"));
  }, []);

  return (
    <div className="flex-box">
      <Category />
      <div className="flex-box_inside">
        <PriceRange />
        <Sort />
        <div className="products-box">
          {products.map((obj) => (
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
                <img src={obj.thumbnail} alt="img" className="product-img" />{" "}
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
                  {Array.from({ length: obj.rating }).map((_, i) => (
                    <img src={star} key={i} alt="star" />
                  ))}{" "}
                  <span>({obj.stock})</span>
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
