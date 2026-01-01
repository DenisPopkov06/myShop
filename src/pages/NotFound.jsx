import { useDispatch } from "react-redux";
import { setActive } from "../redux/slices/headerSlice";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/notFound.css";

const NotFound = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActive(-1));
  });

  return (
    <div className="notFound-page">
      <span className="notFound-title">
        😔 <br />
        404 Not Found
      </span>
      <div className="description">
        Your visited page not found. You may go home page.
      </div>
      <button className="goBackBtn">
        <NavLink to={"/"} className="goBackBtn-link">
          Back to home page
        </NavLink>
      </button>
    </div>
  );
};

export default NotFound;
