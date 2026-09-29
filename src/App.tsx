import { useAuth } from "./context/AutchContext";
import { LoginPage } from "./page/userLoginPage/loginPage";
import { MainPage } from "./page/mainPage/mainPage";

export const App = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <MainPage /> : <LoginPage />;
};