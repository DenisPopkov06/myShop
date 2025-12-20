import { useDispatch, useSelector } from "react-redux";
import { setHoveredId } from "../../redux/slices/productSlice";
import Skeleton from "../skeleton/skeleton"
import like from "../../img/like.png";
import star from "../../img/product-raiting.png";
import style from "./product.module.css";
import skeloton_style from "../skeleton/skeleton.module.css"

const Product = ({loading}) => {
  const dispatch = useDispatch();
  const hoveredId = useSelector((state) => state.productReducer.hoveredId);
  const value = useSelector((state) => state.headerReducer.value);
  const price = useSelector((state) => state.priceReducer.price);
  const category = useSelector((state) => state.categoryReducer.category);
  let products = useSelector((state) => state.productReducer.products);
  const sort = useSelector((state) => state.sortReducer.status);

  const skelet = Array.from({ length: 12 }).map((_, i) => (
    <div className={skeloton_style.skeleton_wrapper} key={i}>
      <Skeleton />
    </div>
  ));

  products = products.filter((obj) => {
    const matchesSearch =
      value.trim() === ""
        ? true
        : obj.title.toLowerCase().includes(value.toLowerCase());
    const matchesPrice = obj.price <= price;
    const matchesCategory =
      category === ""
        ? true
        : obj.category?.toLowerCase().trim() === category?.toLowerCase().trim();

    return matchesSearch && matchesPrice && matchesCategory;
  });

  return (
    <>
      {loading ? (
        skelet
      ) : products.length ? (
        products
          .sort((a, b) => a[sort] - b[sort])
          .map((obj) => (
            <div className={style.product} key={obj.id}>
              <div
                className={style.head_product_info}
                onMouseEnter={() => dispatch(setHoveredId(obj.id))}
                onMouseLeave={() => dispatch(setHoveredId(null))}
              >
                <span className={style.discountPercentage}>
                  -{obj.discountPercentage}%
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
                {hoveredId === obj.id && (
                  <button className={style.addToCartBtn}>Add To Cart</button>
                )}
              </div>
              <div className={style.product_title}>{obj.title}</div>
              <div className={style.product_price}>
                {"$" + obj.price}{" "}
                <span>
                  {"$" +
                    ((obj.price * obj.discountPercentage) / 100 + obj.price).toFixed(2)}
                </span>
                <div className={style.product_rating}>
                  {Array.from({ length: obj.rating }).map((_, i) => (
                    <img src={star} key={i} alt="star" />
                  ))}{" "}
                  <span>Осталось: {Math.round(obj.total)}</span>
                </div>
              </div>
            </div>
          ))
      ) : (
        <div className="empty-products">Извините, но таких товаров нет :(</div>
      )}
    </>
  );
};

export default Product;
