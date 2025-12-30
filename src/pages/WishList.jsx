import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setActive } from "../redux/slices/headerSlice";
import WishItem from "../components/wishItem/wishItem";
import "../css/wishList.css";

const WishList = () => {
  const counterWishList = useSelector(
    (state) => state.wishListReducer.countOfWishItems
  );
  const wishItems = useSelector(
    (state) => state.wishListReducer.wishItems
  ).filter((el) => el.like);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActive(-1));
  });

  return (
    <div className="wishList">
      <div className="wishListCounter">Wishlist ({counterWishList})</div>
      <div>
        <div className={`${wishItems.length === 0 ? "" : "wishItemsBlock"}`}>
          {wishItems.length === 0 ? (
            <div className="noWish">You have no wish :(</div>
          ) : (
            wishItems.map((wishItem) => (
              <WishItem
                obj={wishItem}
                className="wishItemsBlock__item"
                key={wishItem.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
