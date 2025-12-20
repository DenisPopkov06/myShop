import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slices/categorySlice";
import style from "./category.module.css";

const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryReducer.category);

  const categories = [
    "Smartphones ",
    "Electronics ",
    "Fashion ",
    "Home ",
    "Kitchen ",
    "Groceries ",
    "Sports ",
    "Accessories ",
    "Beauty  ",
  ];

  const onCategoryClick = (el) => {
    if (el === category) {
      dispatch(setCategory(""));
    } else {
      dispatch(setCategory(el));
    }
  };

  return (
    <div className={style.category}>
    <h2 className={style.categories} onClick={() => dispatch(setCategory(""))}>Categories</h2>
      <ul className={style.category_list}>
        {categories.map((el) => (
          <li
            onClick={() => onCategoryClick(el)}
            className={`${style.category_list_item} ${
              category === el ? style.active : style.default
            }`}
            key={el}
          >
            <button className={style.category_list_item_btn}>{el}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Category);
