import { NavLink } from "react-router-dom";
import { useState } from "react";
import startImg from "../../assets/img/startImg.png";
import style from "./from.module.css";

const Form = ({ isRegister, handleClick }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");



  return (
    <div className={style.formContainer}>
      <img src={startImg} alt="startImg" />
      <div className={style.infoFromBlock}>
        <h2 className={style.formTitle}>
          {isRegister ? "Create an account" : "Log in to Exclusive"}
        </h2>
        <div className={style.formSubTitle}>Enter your details below</div>
        <form
          className={style.form}
          onSubmit={(e) => {
            handleClick(email, password);
            e.preventDefault();
          }}
        >
          {isRegister && (
            <input
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            required
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isRegister ? (
            <button className={style.formBtn} type="submit">
              Create Account
            </button>
          ) : (
            <div className={style.formLoginBtnContainer}>
              <button className={style.formBtn} type="submit">Log In</button>{" "}
              <NavLink to={"/register"} className={style.formRegisterLink}>
                Don`t have account?
              </NavLink>
            </div>
          )}
        </form>
        {isRegister && (
          <div className={style.formRegisterBtnContainer}>
            <span>Already have account?</span>
            <NavLink to={"/login"} className={style.formLoginLink}>
              Log in
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
