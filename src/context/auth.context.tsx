import React, { createContext, useState } from 'react';

import { AuthenticatedUser, SigninData, SignupData } from 'common/constants/types';

import AuthService from 'services/auth-service';

interface AuthContextData {
  signed: boolean;
  token: string | null;
  user: object | null;
  signUp(data: SignupData): Promise<void>;
  signIn(data: SigninData): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const authService: AuthService = new AuthService();

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<object | null>(null);

  async function signUp(data: SignupData): Promise<void> {
    const response = await authService.signUp(data);
    setToken(response.token);
    setUser(response.user);
  }

  async function signIn(data: SigninData): Promise<void> {
    const response = await authService.signIn(data);
    setToken(response.token);
    setUser(response.user);
  }

  async function signOut(): Promise<void> {
    setToken(null);
    setUser(null);
  }
  console.log({ user });

  return (
    <AuthContext.Provider value={{ signed: !!user, token, user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
