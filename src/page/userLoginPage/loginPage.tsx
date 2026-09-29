import { useState, type SyntheticEvent } from "react";
import { useAuth } from "../../context/AutchContext";
import style from "./loginPage.module.css";

// Вход
export const LoginPage = () => {
  const { login } = useAuth();
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!idInstance.trim() || !apiTokenInstance.trim()) return;
    login({
      idInstance: idInstance.trim(),
      apiTokenInstance: apiTokenInstance.trim(),
    });
  };

  return (
    <form className={style.login_form} onSubmit={handleSubmit}>
      <span className={style.form_text}>Login</span>
      <input
        className={style.form_input}
        placeholder="idInstance"
        value={idInstance}
        onChange={(e) => setIdInstance(e.target.value)}
      />
      <input
        className={style.form_input}
        placeholder="apiTokenInstance"
        value={apiTokenInstance}
        onChange={(e) => setApiTokenInstance(e.target.value)}
      />
      <button className={style.btn_form} type="submit">
        Войти
      </button>
    </form>
  );
};

export default LoginPage;
