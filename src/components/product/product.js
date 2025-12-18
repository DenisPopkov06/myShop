import { useDispatch, useSelector } from "react-redux";
import { setHoveredId } from "../../redux/slices/productSlice";
import like from "../../img/like.png";
import star from "../../img/product-raiting.png";
import style from "./product.module.css"

const Product = ({id, discountPercentage, thumbnail, title, price, total, rating}) => {
  const dispatch = useDispatch();
  const hoveredId = useSelector((state) => state.productReducer.hoveredId);

  return (
    <div className={style.product}>
      <div
        className={style.head_product_info}
        onMouseEnter={() => dispatch(setHoveredId(id))}
        onMouseLeave={() => dispatch(setHoveredId(null))}
      >
        <span className={style.discountPercentage}>-{discountPercentage}%</span>
        <button className={style.wishlistBtn}>
          <img src={like} alt="like" />
        </button>
        <img
          src={thumbnail}
          alt="img"
          className={style.product_img}
          loading="lazy"
        />{" "}
        {hoveredId === id && (
          <button className={style.addToCartBtn}>Add To Cart</button>
        )}
      </div>
      <div className={style.product_title}>{title}</div>
      <div className={style.product_price}>
        {"$" +
          price}{" "}
        <span>{"$" + (price*discountPercentage/100+price).toFixed(2)}</span>
        <div className={style.product_rating}>
          {Array.from({ length: rating }).map((_, i) => (
            <img src={star} key={i} alt="star" />
          ))}{" "}
          <span>({Math.round(total)})</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
