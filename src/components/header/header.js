import { useDispatch, useSelector } from "react-redux";
import { setActive, setValue } from "../../redux/slices/headerSlice";

import cart from "./icons/cart.png";
import like from "./icons/like.png";
import searching from "./icons/searching.png";
import styles from "./header.module.css";

const Header = () => {
  const active = useSelector((state) => state.headerReducer.active);
  const value = useSelector((state) => state.headerReducer.value);
  const dispatch = useDispatch();
  const pages = ["Home", "Contact", "About", "Sign Up"];

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="#">Exclusive</a>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul className={styles.navigation_list}>
            {pages.map((el) => (
              <li
                className={styles.navigation_list_item}
                key={el}
                onClick={() => dispatch(setActive(el))}
              >
                <a href="#" className={el === active ? styles.active : ""}>
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.searching_section}>
        <form onSubmit={(e) => e.preventDefault()}>
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
        <button className={styles.like_btn}>
          <img src={like} alt="like" />
        </button>
        <button className={styles.cart_btn}>
          <img src={cart} alt="cart" />
        </button>
      </div>
    </div>
  );
};

export default Header;
