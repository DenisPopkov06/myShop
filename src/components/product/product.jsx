import { useSelector } from "react-redux";
import ProductItem from "../productItem/productItem";
import Skeleton from "../skeleton/skeleton";
import skeloton_style from "../skeleton/skeleton.module.css";
import style from "./product.module.css"

const Product = ({ loading }) => {
  const value = useSelector((state) => state.headerReducer.value);
  const price = useSelector((state) => state.priceReducer.price);
  const category = useSelector((state) => state.categoryReducer.category);
  const sort = useSelector((state) => state.sortReducer.status);
  let products = useSelector((state) => state.productReducer.products);

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
          .sort((a, b) => b[sort] - a[sort])
          .map((obj) => <ProductItem obj={obj} key={obj.id} />)
      ) : (
        <div className={style.empty_products}>Извините, но таких товаров нет :(</div>
      )}
    </>
  );
};

export default Product;
