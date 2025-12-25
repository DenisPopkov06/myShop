import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setActive } from "../redux/slices/headerSlice";
import "../css/cart.css";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const sectors = ["Product", "Price", "Quantity", "Subtotal"];

  return (
    <div>
      {" "}
      <div className="pages-path">
        <NavLink
          className="home-path-link"
          to={"/"}
          onClick={() => dispatch(setActive("Home"))}
        >
          Home /{" "}
        </NavLink>
        <NavLink to={"/cart"}> Cart</NavLink>
      </div>
      <div className="flex-cart-box">
        <div className="flex-cart-box__header">
          {sectors.map((el) => (
            <div key={el} className="flex-cart-box__header_item">
              {el}
            </div>
          ))}
        </div>
        <div className="flex-cart-box__main">
          {cartProducts.map((obj) => (
            <div className="flex-cart-box__main_item" key={obj.id}>
              <div><img src={obj.thumbnail}/>{obj.title}</div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
