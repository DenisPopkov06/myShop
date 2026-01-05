import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActive } from "../redux/slices/headerSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/slices/userSlice";
import Form from "../components/form/Form";
import { useState } from "react";
import Modal from "../modals/modal";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState();
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
      .catch(() => setIsOpen(true));
  };

  return (
    <>
      <Form isRegister={true} handleClick={registerClick} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}><p>Пользователь с таким email уже существует</p></Modal>
    </>
  );
};

export default Register;
