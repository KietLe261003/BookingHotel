import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import RouterLink from "../../Until/RouterLink";
import { UserService } from "../../Service/UserService";
import { message, notification } from "antd";

const USER_TOKEN=import.meta.env.VITE_USER_TOKEN;
export const AuthConext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => {
    const storeToken = localStorage.getItem(USER_TOKEN);
    return storeToken ? storeToken : undefined;
  });

  const login = async (userData) => {
    try {
      const res = await UserService.login(userData);
      localStorage.setItem(USER_TOKEN, res.data);
      setToken(userData.token);
      notification.success({message: "Đăng nhập thành công"});
      navigate(RouterLink.Home);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    localStorage.removeItem(USER_TOKEN);
    setToken(null);
    return <Navigate to={RouterLink.Home} />;
  };
  const checkToken = async()=>{
    try {
      const res = UserService.checkToken(token);
      if(res.data==false)
      {
        logout();
      }
    } catch (error) {
      alert("Lỗi xử lý");
      console.log(error);
    }
  }
  useEffect(()=>{
    if(token)
      checkToken();
  },[token])
  return (
    <AuthConext.Provider value={{ login, logout, token }}>
      {children}
    </AuthConext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthConext);
  if (!context) throw new Error("User này bị rỗng");
  return context;
};
