import style from "./loginPage.module.css";

export const LoginPage = () => {
  return (
    <form className={style.login_form}>
      <span className={style.form_text}>Sing in</span>
      <input
        className={style.form_input}
        placeholder="Email"
        type="email"
      ></input>
      <input
        className={style.form_input}
        placeholder="Password"
        type="password"
      ></input>
      <button className={style.btn_form} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
