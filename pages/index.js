import Button from "../components/LoginRegister/Button/Button";
import Login from "../components/LoginRegister/Login/Login";
import styles from "./index.module.scss";
import React, { useState } from "react";
import Register from "../components/LoginRegister/Register/Register";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    setIsRegister(false);
  };

  const toggleRegister = () => {
    setIsRegister(!isRegister);
    setIsLogin(false);
  };


  return (
    <div className={styles.index}>
      <Button text={"Giris Yap"} onClick={toggleLogin}/>
      <Button text={"Kayit Ol"} onClick={toggleRegister}/>
      {isLogin && <Login />}
      {isRegister && <Register />}
    </div>
  );
}

