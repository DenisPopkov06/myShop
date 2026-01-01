import { useSelector } from "react-redux";

const useAuth = () => {
  const { name, email, token, id } = useSelector((state) => state.userReducer);

  return {
    isAuth: !!email && !!token,
    name,
    email,
    token,
    id,
  };
};

export default useAuth;
