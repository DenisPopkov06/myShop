import Category from "../components/category/category";
import PriceRange from "../components/priceRange/priceRange";
import Sort from "../components/sort/sort";

const Home = () => {
  return (
    <div className="flex-box">
      <Category />
      <div className="flex-box_inside">
        <PriceRange />
        <Sort />
      </div>
    </div>
  );
};

export default Home;
