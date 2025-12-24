import { setSize, setCountPlus, setCountMinus } from "../../redux/slices/fullProductItemSlice";
import { useDispatch, useSelector } from "react-redux";
import star from "../../img/product-raiting.png";
import like from "../../img/like.png";
import delivery from "./icons/delivery.png";
import goBack from "./icons/goBack.png";
import style from "./fullProductItem.module.css";
import { useEffect } from "react";

const FullProductItem = (filteredProduct) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const activeSize = useSelector((state) => state.fullProductItemSlice.size);
  const counter = useSelector((state) => state.fullProductItemSlice.count);
  const dispatch = useDispatch();
  
  useEffect(() => {dispatch(setSize("M"))}, [dispatch])
  

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
              onClick={() => dispatch(setSize(size))}
              className={
                size === activeSize
                  ? `${style.productSizeButton} ${style.activeSize}`
                  : `${style.productSizeButton}`
              }
            >
              {size}
            </button>
          ))}
          <div className={style.productButtonSection}>
            <div className={style.productCounterBlock}>
              <button className={style.productMinus} onClick={() => dispatch(setCountMinus())} disabled={counter === 1}>-</button>
              <div className={style.productCounterDescription}>{counter}</div>
              <button className={style.productPlus} onClick={() => dispatch(setCountPlus())}>+</button>
            </div>
            <button className={style.productBuyNowBtn}>Buy Now</button>
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
