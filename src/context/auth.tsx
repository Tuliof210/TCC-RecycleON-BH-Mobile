import React, { createContext, useState } from 'react';

import AuthService from 'services/auth';

interface AuthContextData {
  signed: boolean;
  token: string;
  user: object;
  login(loginData: { email: string; password: string }): Promise<void>;
  signup(signupData: { name: string; email: string; password: string }): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const authService: AuthService = new AuthService();
  const [user, setUser] = useState<object | null>(null);

  async function login(loginData: { email: string; password: string }): Promise<void> {
    const response = await authService.login(loginData);
    setUser(response.user);
  }

  async function signup(signupData: { name: string; email: string; password: string }): Promise<void> {
    const response = await authService.signup(signupData);
    setUser(response.user);
  }

  console.log({ user });

  return (
    <AuthContext.Provider value={{ signed: !!user, token: '', user: {}, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
