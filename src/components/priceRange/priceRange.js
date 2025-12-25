import { useRef, useEffect, useMemo } from "react";
import { debounce } from "lodash";
import { setPrice } from "../../redux/slices/priceSlice";
import { useDispatch, useSelector } from "react-redux";
import style from "./priceRange.module.css";

const PriceRange = () => {
  const priceRef = useRef(null);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const currentPrice = useSelector((state) => state.priceReducer.price);

  const debouncedSetPrice = useMemo(
    () =>
      debounce((value) => {
        dispatch(setPrice(value));
      }, 200),
    [dispatch]
  );

  useEffect(() => {
    const slider = sliderRef.current;
    const price = priceRef.current;
    const percentage = slider.value / 10;

    price.textContent = currentPrice;
    slider.value = currentPrice;
    slider.style.background = `
      linear-gradient(
        90deg, 
        black ${percentage}%, 
        white ${percentage}%
      )
    `;

    const handleInput = () => {
      const value = slider.value;
      const percentage = value / 10;
      price.textContent = value;
      slider.style.background = `
      linear-gradient(
        90deg, 
        black ${percentage}%, 
        white ${percentage}%
      )
    `;
      debouncedSetPrice(value);
    };

    slider.addEventListener("input", handleInput);

    return () => {
      slider.removeEventListener("input", handleInput);
    };
  }, [currentPrice, debouncedSetPrice]);

  return (
    <div className={style.slider_container}>
      <input
        type="range"
        min={0}
        max={1000}
        className={style.slider}
        ref={sliderRef}
        defaultValue={currentPrice || 500}
      />
      <p className={style.price}>
        Price: <span ref={priceRef}>{currentPrice || 500}</span>$
      </p>
    </div>
  );
};

export default PriceRange;
