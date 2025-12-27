import { useDispatch } from "react-redux";
import { deleteCartItem, setCount } from "../../redux/slices/cartSlice";
import close from "../../img/icon_close.svg.png";
import style from "./cartItem.module.css";
import { NavLink } from "react-router-dom";

const CartItem = ({ obj }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.flex_cart_box__main_item} key={obj.id}>
      <button
        className={style.delete_product_btn}
        onClick={() => {
          dispatch(deleteCartItem(obj.id));
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
      <div>{obj.count}</div>
      <div>{(obj.count * obj.price).toFixed(2)}$</div>
    </div>
  );
};

export default CartItem;
