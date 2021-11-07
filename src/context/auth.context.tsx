import React, { createContext, useState, useEffect } from 'react';

import { SigninData, SignupData, User, UpdateUserData } from 'common/constants/types';

import { AuthService } from 'services';

interface AuthContextData {
  token: string | null;
  signUp(data: SignupData): Promise<void>;
  signIn(data: SigninData): Promise<void>;
  signOut(): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [token, setToken] = useState<string | null>(null);

  const authService: AuthService = new AuthService(setToken);
  useEffect(() => {
    (async () => {
      await authService.loadUserToken();
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

  return <AuthContext.Provider value={{ token, signUp, signIn, signOut }}>{children}</AuthContext.Provider>;
}
