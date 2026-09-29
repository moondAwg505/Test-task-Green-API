import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthData {
  idInstance: string;
  apiTokenInstance: string;
}

interface AuthContextValue extends Partial<AuthData> {
  isAuthenticated: boolean;
  login: (data: AuthData) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthData | null>(() => {
    const saved = localStorage.getItem("auth");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (data: AuthData) => {
    localStorage.setItem("auth", JSON.stringify(data));
    setAuth(data);
  };

  return (
    <AuthContext.Provider
      value={{ ...auth, isAuthenticated: !!auth, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth используется вне AuthProvider");
  return ctx;
};