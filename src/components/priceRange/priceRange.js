import { useRef, useEffect, useCallback } from "react";
import { setPrice } from "../../redux/slices/priceSlice";
import { useDispatch, useSelector } from "react-redux";
import style from "./priceRange.module.css";

const PriceRange = () => {
  const priceRef = useRef(null);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const currentPrice = useSelector((state) => state.priceReducer.price);
  const timeoutRef = useRef(null);

  const debounce = useCallback((fn, delay) => {
    return (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }, []);

  const debouncedDispatch = useCallback(
    debounce((value) => {
      dispatch(setPrice(value));
    }, 200),
    [dispatch, debounce]
  );

  useEffect(() => {
    const slider = sliderRef.current;
    const price = priceRef.current;
    
    const initialPrice = currentPrice || 500;
    let x = initialPrice / 10;
    
    if (price) price.textContent = initialPrice;
    if (slider) {
      slider.value = initialPrice;
      slider.style.background = `linear-gradient(90deg, black ${x}%, white ${x}%)`;
    }
    
    const handleInput = () => {
      moveslider();
    };
    
    slider.addEventListener("input", handleInput);

    return () => {
      slider.removeEventListener("input", handleInput);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentPrice]);

  const moveslider = () => {
    const slider = sliderRef.current;
    const price = priceRef.current;
    
    if (!slider || !price) return;
    
    const value = slider.value;
    let x = value / 10;
    
    price.textContent = value;
    slider.style.background = `linear-gradient(90deg, black ${x}%, white ${x}%)`;
    
    debouncedDispatch(value);
  };

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