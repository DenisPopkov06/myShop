import star from "../../img/product-raiting.png";
import like from "../../img/like.png";
import style from "./fullProductItem.module.css";

const FullProductItem = (filteredProduct) => {

  const sizes = ["XS", "S", "M", "L", "XL"]

  return (
    <div className={style.flexContainer}>
      <img
        src={filteredProduct.thumbnail}
        alt="product"
        className={style.productImg}
      ></img>
      <div>
        <div className={style.productFirstBlock}>
          <div>
            <h1 className={style.productTitle}>{filteredProduct.title}</h1>
            {Array.from({ length: filteredProduct.rating }).map((_, i) => (
              <img src={star} alt="star" key={i} className={style.starImg} />
            ))}
            <span className={style.productReviews}>
              ({Math.ceil(filteredProduct.discountedTotal)} Reviews)  |
            </span>
            <span className={style.productStock}> In Stock</span>
          </div>
          <h3 className={style.productPrice}>{filteredProduct.price}$</h3>
          <p className={style.productDescription}>{filteredProduct.description}</p>
        </div>
        <div>
          <h3>Size:</h3>
          {sizes.map(size => <button key={size}>{size}</button>)}
          <div>
            <button>-</button>
            <div></div>
            <button>+</button>
          </div>
          <button>Buy Now</button>
          <button>
            <img src={like} alt="like" />
          </button>
        </div>
        <div>
          <div>
            <h3>Free Delivery</h3>
            <p>for orders over 30$</p>
          </div>
          <div>
            <h3>Return Delivery</h3>
            <p>Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProductItem;
