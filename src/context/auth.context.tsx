import React, { createContext, useState, useEffect } from 'react';

import { SigninData, SignupData, SocialProfileData } from 'common/constants/types';

import { AuthService } from 'services';

interface AuthContextData {
  token: string | null;
  socialAuth(data: SocialProfileData, brand: string): Promise<void>;
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

  async function socialAuth(data: SocialProfileData, brand: string): Promise<void> {
    await authService.socialAuth(data, brand);
  }

  //=====================================================

  async function signUp(data: SignupData): Promise<void> {
    await authService.signUp(data);
  }

  async function signIn(data: SigninData): Promise<void> {
    await authService.signIn(data);
  }

  async function signOut(): Promise<void> {
    await authService.signOut();
  }

  return <AuthContext.Provider value={{ token, signUp, signIn, signOut, socialAuth }}>{children}</AuthContext.Provider>;
}
