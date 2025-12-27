import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { setActive } from "../redux/slices/headerSlice";
import CartItem from "../components/cartItem/cartItem";
import emptyCart from "../img/empty-cart.png";
import "../css/cart.css";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActive(-1));
  }, [dispatch]);

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
      {cartProducts.length === 0 ? (
        <div className="empty-cart">
          Your cart is empty. Please chose some products.
          <img src={emptyCart} alt="empty" />
        </div>
      ) : (
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
              <CartItem obj={obj} key={obj.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
