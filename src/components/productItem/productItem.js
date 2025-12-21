import like from "../../img/like.png";
import star from "../../img/product-raiting.png";
import style from "./productItem.module.css";

const ProductItem = ({ obj }) => {

  return (
    <div className={style.product} key={obj.id}>
      <div className={style.head_product_info}>
        <span className={style.discountPercentage}>
          -{Math.ceil(obj.discountPercentage)}%
        </span>
        <button className={style.wishlistBtn}>
          <img src={like} alt="like" />
        </button>
        <img
          src={obj.thumbnail}
          alt="img"
          className={style.product_img}
          loading="lazy"
        />{" "}
        <button className={style.addToCartBtn}>Add To Cart</button>
      </div>
      <div className={style.product_title}>{obj.title}</div>
      <div className={style.product_price}>
        {"$" + obj.price}{" "}
        <span>
          {"$" +
            ((obj.price * Math.ceil(obj.discountPercentage)) / 100 + obj.price).toFixed(2)}
        </span>
        <div className={style.product_rating}>
          {Array.from({ length: obj.rating }).map((_, i) => (
            <img src={star} key={i} alt="star" />
          ))}{" "}
          <span>Осталось: {Math.round(obj.total)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
