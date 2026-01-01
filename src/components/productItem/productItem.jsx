import { NavLink } from "react-router-dom";
import { setCart, setCount } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { setFullProductInfo } from "../../redux/slices/fullProductItemSlice";
import {
  setWishItems,
  setCountOfWishItems,
} from "../../redux/slices/wishListSlice";
import like from "../../assets/img/like.png";
import activeLike from "../../assets/img/activeLike.png";
import quickView from "../../assets/img/QuickView.png";
import cartProduct from "../../assets/img/CartProduct.png";
import star from "../../assets/img/product-raiting.png";
import style from "./productItem.module.css";

const ProductItem = ({ obj }) => {
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.wishListReducer.wishItems);
  const index = wishItems.findIndex((item) => item.id === obj.id);

  return (
    <div className={style.product} key={obj.id}>
      <div className={style.head_product_info}>
        <span className={style.discountPercentage}>
          -{Math.ceil(obj.discountPercentage)}%
        </span>
        <button
          className={style.wishlistBtn}
          onClick={() => {
            dispatch(setWishItems(obj));
            dispatch(setCountOfWishItems());
          }}
        >
          <img
            src={wishItems[index]?.like === true ? activeLike : like}
            alt="like"
          />
        </button>
        <NavLink to={`/products/${obj.id}`} className={style.product_Link}>
          <button className={style.quickView}>
            <img src={quickView} alt="like" />
          </button>
        </NavLink>
        <img
          src={obj.thumbnail}
          alt="img"
          className={style.product_img}
          loading="lazy"
        />{" "}
        <button
          className={style.addToCartBtn}
          onClick={() => {
            dispatch(setCart({ ...obj, fullitem: true }));
            dispatch(setCount());
            dispatch(
              setFullProductInfo({
                ...obj,
                size: "M",
                count: 1,
              })
            );
          }}
        >
          <img src={cartProduct} alt="cart" />
          Add To Cart
        </button>
      </div>
      <div className={style.product_title}>{obj.title}</div>
      <div className={style.product_price}>
        {"$" + obj.price}{" "}
        <span>
          {"$" +
            (
              (obj.price * Math.ceil(obj.discountPercentage)) / 100 +
              obj.price
            ).toFixed(2)}
        </span>
        <div className={style.product_rating}>
          {Array.from({ length: obj.rating }).map((_, i) => (
            <img src={star} key={i} alt="star" />
          ))}{" "}
          <span>Осталось: {Math.round(obj.total)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
