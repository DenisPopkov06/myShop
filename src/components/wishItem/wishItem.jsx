import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart, setCount } from "../../redux/slices/cartSlice";
import { setFullProductInfo } from "../../redux/slices/fullProductItemSlice";
import { deleteWishItem } from "../../redux/slices/wishListSlice";
import quickView from "../../img/QuickView.png";
import cartProduct from "../../img/CartProduct.png";
import deleteBtn from "../../img/icon-delete.png";
import style from "./wishItem.module.css";

const WishItem = ({ obj }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.product} key={obj.id}>
      <div className={style.head_product_info}>
        <span className={style.discountPercentage}>
          -{Math.ceil(obj.discountPercentage)}%
        </span>
        <NavLink to={`/products/${obj.id}`} className={style.product_Link}>
          <button className={style.quickView}>
            <img src={quickView} alt="like" />
          </button>
        </NavLink>
        <button
          className={style.deletebtn}
          onClick={() => {
            dispatch(deleteWishItem(obj));
          }}
        >
          <img src={deleteBtn} alt="like" />
        </button>
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
      </div>
    </div>
  );
};

export default WishItem;
