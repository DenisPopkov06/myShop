import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActive } from "../redux/slices/headerSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/slices/userSlice";
import Form from "../components/form/Form";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setActive(-1));
  }, []);

  const loginClick = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            name: user.name,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Некорректные данные"));
  };

  return <Form isRegister={false} handleClick={loginClick} />;
};

export default Login;
