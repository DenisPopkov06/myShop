import { useRef, useEffect } from "react";
import style from "./priceRange.module.css";

const PriceRange = () => {
  const priceRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(()=> {
    const slider = sliderRef.current
    const price =priceRef.current

    price.textContent = slider.value
    const moveslider = () => {
      price.textContent = slider.value
      let x = slider.value / 10
      slider.style.background = `linear-gradient(90deg, black ${x}%, white ${x}%)`
    }

    slider.addEventListener("mousemove", moveslider)

    return () => {
      slider.removeEventListener("mousemove", moveslider)
    }
  }, [])

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
