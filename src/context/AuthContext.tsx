import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";

interface User {
  username: string;
  password: string;
  name: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  username?: string;
  name?: string;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const users: User[] = [
  { username: "admin", password: "pass123", name: "Administrator" },
  { username: "user1", password: "passpass", name: "Fábio Oliveira" },
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [username, setUsername] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const router = useRouter();

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
      setUsername(localStorage.getItem("username") || undefined);
      setName(localStorage.getItem("name") || undefined);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = (inputUsername: string, inputPassword: string) => {
    const user = users.find(
      (user) => user.username === inputUsername && user.password === inputPassword
    );

    if (user) {
      setIsAuthenticated(true);
      setUsername(user.username);
      setName(user.name);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", user.username);
      localStorage.setItem("name", user.name);
      router.push("/dashboard");
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername(undefined);
    setName(undefined);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    router.push("/");
  };

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, name, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
