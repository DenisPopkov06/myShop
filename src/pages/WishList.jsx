import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setActive } from "../redux/slices/headerSlice";
import WishItem from "../components/wishItem/wishItem";
import RecomendProduct from "../components/recomendProduct/recomendProduct";
import "../css/wishList.css";

const WishList = () => {
  const counterWishList = useSelector(
    (state) => state.wishListReducer.countOfWishItems
  );
  const wishItems = useSelector(
    (state) => state.wishListReducer.wishItems
  ).filter((el) => el.like);
  let products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActive(-1));
  });
  const categories = [...new Set(wishItems.map((el) => el.category))];
  const recomendProducts = products.filter(
    (product) =>
      categories.includes(product.category) &&
      !wishItems.map((el) => el.id).includes(product.id)
  );

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
      {recomendProducts.length !== 0 && (
        <div>
          <div className="RecomendProductTitle">Just For You</div>
          <div className={`${wishItems.length === 0 ? "" : "wishItemsBlock"}`}>
            {recomendProducts.map((recomendProduct, i) => (
              <RecomendProduct obj={recomendProduct} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishList;
