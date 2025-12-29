import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef } from "react";
import { setOpen, setStatus, setClose } from "../../redux/slices/sortSlice";
import style from "./sort.module.css";

const Sort = () => {
  const open = useSelector((state) => state.sortReducer.open);
  const status = useSelector((state) => state.sortReducer.status);
  const dispatch = useDispatch();
  const sort = useRef(null);

  useEffect(() => {
    const outsideClick = (event) => {
      if (!event.composedPath().includes(sort.current)) {
        dispatch(setClose());
      }
    };

    if (open) {
      document.body.addEventListener("click", outsideClick);
    }

    return () => {
      document.body.removeEventListener("click", outsideClick);
    };
  }, [open, dispatch]);

  const statuses = ["price", "rating", "popularity"];

  const onSortClick = (item, e) => {
    e.stopPropagation();
    dispatch(setStatus(item));
    dispatch(setOpen());
  };

  return (
    <div ref={sort} className={style.sort} onClick={() => dispatch(setOpen())}>
      <div className={style.sortHeader}>
        Sort by: <span>{status}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={open ? style.active_svg : ""}
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
      </div>
      {open && (
        <ul className={style.statuses_list}>
          {statuses.map((item) => (
            <li
              key={item}
              onClick={(e) => onSortClick(item, e)}
              className={status === item ? style.active : style.default}
            >
              <button className={style.sort_list_item_btn}>{item}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(Sort);
