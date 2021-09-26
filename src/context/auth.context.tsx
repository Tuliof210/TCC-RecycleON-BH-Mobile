import React, { createContext, useState, useEffect } from 'react';

import { SigninData, SignupData, User } from 'common/constants/types';

import { AuthService } from 'services';

interface AuthContextData {
  signed: boolean;
  token: string | null;
  user: User | null;
  signUp(data: SignupData): Promise<void>;
  signIn(data: SigninData): Promise<void>;
  signOut(): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const authService: AuthService = new AuthService(setToken, setUser);
  useEffect(() => {
    (async () => {
      await authService.loadUserData();
    })();
  }, []);

  async function signUp(data: SignupData): Promise<void> {
    await authService.signUp(data);
  }

  async function signIn(data: SigninData): Promise<void> {
    await authService.signIn(data);
  }

  async function signOut(): Promise<void> {
    await authService.signOut();
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, token, user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
