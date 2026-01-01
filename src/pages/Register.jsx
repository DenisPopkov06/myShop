import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActive } from "../redux/slices/headerSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/slices/userSlice";
import Form from "../components/form/Form";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(setActive("Sign Up"));

  const registerClick = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert("пользователь с таким email уже существует"));
  };

  return <Form isRegister={true} handleClick={registerClick} />;
};

export default Register;
