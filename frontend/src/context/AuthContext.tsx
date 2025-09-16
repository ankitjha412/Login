import React, { createContext, useState, useEffect, ReactNode } from "react";
import { loginUser, registerUser, getProfile } from "../api/userApi";
import type { AuthResponse, User } from "../api/userApi";  
import { getToken, setToken, clearToken } from "../utils/storage";


interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setAuthToken] = useState<string | null>(getToken());
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        try {
          const res = await getProfile(token);
          setUser(res.data);
        } catch (err) {
          clearToken();
          setAuthToken(null);
          setUser(null);
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, [token]);

  const login = async (email: string, password: string) => {
    const res = await loginUser({ email, password });
    const { token: jwt, user } = res.data as AuthResponse;
    setUser(user);
    setAuthToken(jwt);
    setToken(jwt);
  };

  const register = async (username: string, email: string, password: string) => {
    await registerUser({ username, email, password });
    await login(email, password);
  };

  const logout = () => {
    clearToken();
    setUser(null);
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
