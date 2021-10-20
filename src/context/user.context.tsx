import React, { createContext, useCallback, useContext, useState } from 'react';

import { UpdateUserData } from 'common/constants/types';

import { AuthContext } from 'context/auth.context';

interface UserContextData {
  updateUser(data: UpdateUserData): Promise<void>;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { token } = useContext(AuthContext);

  const updateUser = useCallback(async () => {}, []);

  return <UserContext.Provider value={{ updateUser }}>{children}</UserContext.Provider>;
}
