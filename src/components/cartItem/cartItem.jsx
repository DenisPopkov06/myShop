import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  setCount,
  counterIncrease,
  counterDecrease,
} from "../../redux/slices/cartSlice";
import { NavLink } from "react-router-dom";
import close from "../../img/icon_close.svg.png";
import style from "./cartItem.module.css";

const CartItem = ({ obj }) => { 
  const dispatch = useDispatch();

  return (
    <div className={style.flex_cart_box__main_item} key={obj.id}>
      <button
        className={style.delete_product_btn}
        onClick={() => {
          dispatch(deleteCartItem([obj.id, obj.size, obj.count]));
          dispatch(setCount());
        }}
      >
        <img src={close} alt="close" />
      </button>
      <div className={style.flex_cart_box__main_item_product_part}>
        <NavLink to={`/products/${obj.id}`}>
          <img
            src={obj.thumbnail}
            alt="product"
            className={style.cart_product_img}
          />
        </NavLink>
        {obj.title}
      </div>
      <div>{obj.price}$</div>
      <div className={style.countOfProduct}>
        <button
          onClick={() => dispatch(counterDecrease(obj.id))}
          disabled={obj.count === 1}
        >
          -
        </button>
        {obj.count}
        <button onClick={() => dispatch(counterIncrease(obj.id))}>+</button>
      </div>
      <div>{obj.size || "M"}</div>
      <div>{(obj.count * obj.price).toFixed(2)}$</div>
    </div>
  );
};

export default React.memo(CartItem);