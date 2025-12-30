import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { setActive } from "../redux/slices/headerSlice";
import { setCount } from "../redux/slices/cartSlice";
import CartItem from "../components/cartItem/cartItem";
import emptyCart from "../img/empty-cart.png";
import "../css/cart.css";

let sale = "";

const Cart = () => {
  const [shipping, setShipping] = useState("5$");
  const cartProducts = useSelector((state) => state.cartReducer.cart);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActive(-1));
    totalPrice > 30 ? setShipping("Free") : setShipping("5$");
    dispatch(setCount());
  }, [dispatch, totalPrice]);

  const sectors = useMemo(
    () => ["Product", "Price", "Quantity", "Size", "Subtotal"],
    []
  );

  const cartItems = useMemo(
    () => cartProducts.map((obj, i) => <CartItem obj={obj} key={i} />),
    [cartProducts]
  );

  return (
    <div className="cart-container">
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
        <div>
          <div className="flex-cart-box">
            <div className="flex-cart-box__header">
              {sectors.map((el) => (
                <div key={el} className="flex-cart-box__header_item">
                  {el}
                </div>
              ))}
            </div>
            <div className="flex-cart-box__main">{cartItems}</div>
            <NavLink to={"/"} onClick={() => dispatch(setActive("Home"))}>
              <button className="return-to-shop-btn">Return To Shop</button>
            </NavLink>
          </div>
          <div className="flexbox">
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("скидка применена!");
                  setShipping("Free");
                  sale = "Free";
                }}
              >
                <input
                  placeholder="Coupon Code"
                  className="input-cart-coupon"
                />
                <button className="cart-red-btn">Apply Coupon</button>
              </form>
            </div>
            <div className="cart-total">
              <h2 className="cart-total_title">Cart Total</h2>
              <div className="cart-total_item">
                <div>Subtotal:</div>
                <div>{totalPrice.toFixed(2)}$</div>
              </div>
              <div className="cart-total_item">
                <div>Shipping:</div>
                <div>{sale || shipping}</div>
              </div>
              <div className="cart-total_item">
                <div>Total:</div>
                <div>
                  {shipping === "5$"
                    ? (totalPrice + 5).toFixed(2)
                    : totalPrice.toFixed(2)}
                  $
                </div>
              </div>
              <div className="total-cert-btn-container">
                <button className="cart-red-btn">Procees to checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;