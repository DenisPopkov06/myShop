import { NavLink } from "react-router-dom";
import { setCart, setCount } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import like from "../../img/like.png";
import cartProduct from "../../img/CartProduct.png";
import star from "../../img/product-raiting.png";
import style from "./productItem.module.css";

const ProductItem = ({ obj }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.product} key={obj.id}>
      <div className={style.head_product_info}>
        <NavLink to={`/products/${obj.id}`} className={style.product_Link}>
          <span className={style.discountPercentage}>
            -{Math.ceil(obj.discountPercentage)}%
          </span>
          <button className={style.wishlistBtn}>
            <img src={like} alt="like" />
          </button>
          <img
            src={obj.thumbnail}
            alt="img"
            className={style.product_img}
            loading="lazy"
          />{" "}
        </NavLink>
        <button
          className={style.addToCartBtn}
          onClick={() => {
            dispatch(setCart(obj));
            dispatch(setCount());
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
