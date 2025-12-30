import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setValue } from "../../redux/slices/headerSlice";
import cart from "./icons/cart.png";
import like from "../../img/like.png";
import searching from "./icons/searching.png";
import styles from "./header.module.css";

const Header = () => {
  const active = useSelector((state) => state.headerReducer.active);
  const value = useSelector((state) => state.headerReducer.value);
  const counterCart = useSelector((state) => state.cartReducer.counter);
  const counterWishList = useSelector(
    (state) => state.wishListReducer.countOfWishItems
  );
  const dispatch = useDispatch();
  const location = useLocation();

  const pages = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "contacts" },
    { name: "About", link: "about" },
    { name: "Sign Up", link: "sing up" },
  ];

  return (
    <div
      className={
        location.pathname.includes("/products/")
          ? `${styles.headerSmallContainer} ${styles.header}`
          : `${styles.header}`
      }
    >
      <div className={styles.logo}>
        <NavLink to={"/"}>Exclusive</NavLink>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul className={styles.navigation_list}>
            {pages.map((obj) => (
              <li
                className={styles.navigation_list_item}
                key={obj.name}
                onClick={() => dispatch(setActive(obj.name))}
              >
                <NavLink
                  to={obj.link}
                  className={obj.name === active ? styles.active : ""}
                >
                  {obj.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.searching_section}>
        {!location.pathname.includes("/products/") && (
          <form
            onSubmit={(e) => e.preventDefault()}
            className={
              location.pathname.includes("/home")
                ? undefined
                : `${styles.displayNone}`
            }
          >
            <input
              onChange={(e) => dispatch(setValue(e.target.value))}
              value={value}
              placeholder="What are you looking for?"
              className={styles.input}
            />
            <button className={styles.searching_btn} type="submit">
              <img src={searching} alt="search" />
            </button>
          </form>
        )}
        <button className={styles.like_btn}>
          <NavLink to={"/wishList"}>
            {counterWishList !== 0 && <span>{counterWishList}</span>}
            <img src={like} alt="like" />
          </NavLink>
        </button>
        <button className={styles.cart_btn}>
          <NavLink to={"/cart"}>
            {counterCart !== 0 && <span>{counterCart}</span>}
            <img src={cart} alt="cart" />
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Header;
