import {
  setSize,
  setCountPlus,
  setCountMinus,
  setFullProductInfo,
} from "../../redux/slices/fullProductItemSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { setCart } from "../../redux/slices/cartSlice";
import { deleteWishItem } from "../../redux/slices/wishListSlice";
import star from "../../assets/img/product-raiting.png";
import like from "../../assets/img/like.png";
import delivery from "./icons/delivery.png";
import goBack from "./icons/goBack.png";
import style from "./fullProductItem.module.css";

const sizes = ["XS", "S", "M", "L", "XL"];

const FullProductItem = (filteredProduct) => {
  const dispatch = useDispatch();
  const fullProductsInfo = useSelector(
    (state) => state.fullProductItemReducer.fullProductsInfo
  );
  const indexOfProduct = fullProductsInfo.findIndex(
    (obj) => obj.id === filteredProduct.id
  );
  const fullProductInfo = fullProductsInfo[indexOfProduct];

  useEffect(() => {
    if (filteredProduct?.id) {
      dispatch(
        setFullProductInfo({
          ...filteredProduct,
          size: "M",
          count: 1,
        })
      );
    }
  }, [dispatch, filteredProduct]);

  return (
    <div className={style.flexContainer}>
      <img
        src={filteredProduct.thumbnail}
        alt="product"
        className={style.productImg}
      ></img>
      <div className={style.productInfo}>
        <div className={style.productFirstBlock}>
          <div>
            <h1 className={style.productTitle}>{filteredProduct.title}</h1>
            {Array.from({ length: filteredProduct.rating }).map((_, i) => (
              <img src={star} alt="star" key={i} className={style.starImg} />
            ))}
            <span className={style.productReviews}>
              ({Math.ceil(filteredProduct.discountedTotal)} Reviews) |
            </span>
            <span className={style.productStock}> In Stock</span>
          </div>
          <h3 className={style.productPrice}>{filteredProduct.price}$</h3>
          <p className={style.productDescription}>
            {filteredProduct.description}
          </p>
        </div>
        <div className={style.productSecondBlock}>
          <h3 className={style.productSize}>Size:</h3>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => dispatch(setSize({ ...fullProductInfo, size }))}
              className={
                size === fullProductInfo?.size
                  ? `${style.productSizeButton} ${style.activeSize}`
                  : `${style.productSizeButton}`
              }
            >
              {size}
            </button>
          ))}
          <div className={style.productButtonSection}>
            <div className={style.productCounterBlock}>
              <button
                className={style.productMinus}
                onClick={() => dispatch(setCountMinus(fullProductInfo))}
                disabled={fullProductInfo?.count === 1}
              >
                -
              </button>
              <div className={style.productCounterDescription}>
                {fullProductInfo?.count}
              </div>
              <button
                className={style.productPlus}
                onClick={() => dispatch(setCountPlus(fullProductInfo))}
              >
                +
              </button>
            </div>
            <NavLink to={"/cart"}>
              <button
                className={style.productBuyNowBtn}
                onClick={() => {
                  dispatch(setCart(fullProductInfo));
                  dispatch(deleteWishItem(fullProductInfo));
                }}
              >
                Buy Now
              </button>
            </NavLink>
            <button className={style.productLikeBtn}>
              <img src={like} alt="like" />
            </button>
          </div>
        </div>
        <div className={style.productThirdBlock}>
          <div
            className={`${style.productDeliveryBlock} ${style.productDeliveryBlockFirst}`}
          >
            <img src={delivery} alt="delivery" />
            <div>
              <h3>Free Delivery</h3>
              <p>for orders over 30$</p>
            </div>
          </div>
          <div
            className={`${style.productDeliveryBlock} ${style.productDeliveryBlockSecond}`}
          >
            <img src={goBack} alt="goBack" />
            <div>
              <h3>Return Delivery</h3>
              <p>Free 30 Days Delivery Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProductItem;
