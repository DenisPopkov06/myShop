import { useRef, useEffect } from "react";
import { setPrice } from "../../redux/slices/priceSlice";
import { useDispatch } from "react-redux";
import style from "./priceRange.module.css";

const PriceRange = () => {
  const priceRef = useRef(null);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const slider = sliderRef.current;
    const price = priceRef.current;

    price.textContent = slider.value;

    slider.addEventListener("input", moveslider);

    return () => {
      slider.removeEventListener("input", moveslider);
    };
  });

  const moveslider = () => {
    const slider = sliderRef.current;
    const price = priceRef.current;
    let x = slider.value / 10;
    price.textContent = slider.value;
    dispatch(setPrice(slider.value));
    slider.style.background = `linear-gradient(90deg, black ${x}%, white ${x}%)`;
  };

  return (
    <div className={style.slider_container}>
      <input
        type="range"
        min={0}
        max={1000}
        className={style.slider}
        ref={sliderRef}
      />
      <p className={style.price}>
        {" "}
        Price: <span ref={priceRef}></span>$
      </p>
    </div>
  );
};

export default PriceRange;
