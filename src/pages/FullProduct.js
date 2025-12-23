import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../redux/slices/headerSlice";
import { useEffect } from "react";
import FullProductItem from "../components/fullProductItem/FullProductItem";

const FullProduct = () => {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const filteredProduct = products.find((product) => product.id === id);

  useEffect(() => {
    dispatch(setActive(-1));
  }, [dispatch]);

  return <FullProductItem {...filteredProduct}/>;
};

export default FullProduct;
