import React, { createContext, useState } from 'react';

import AuthService from 'services/auth';

interface AuthContextData {
  signed: boolean;
  token: string | null;
  user: object | null;
  signup(signupData: { name: string; email: string; password: string }): Promise<void>;
  login(loginData: { email: string; password: string }): Promise<void>;
  logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authService: AuthService = new AuthService();

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<object | null>(null);

  async function signup(signupData: { name: string; email: string; password: string }): Promise<void> {
    const response = await authService.signup(signupData);
    setToken(response.token);
    setUser(response.user);
  }

  async function login(loginData: { email: string; password: string }): Promise<void> {
    const response = await authService.login(loginData);
    setToken(response.token);
    setUser(response.user);
  }

  async function logout(): Promise<void> {
    setToken(null);
    setUser(null);
  }
  console.log({ user });

  return (
    <AuthContext.Provider value={{ signed: !!user, token, user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
