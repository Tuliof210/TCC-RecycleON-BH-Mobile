import React, { createContext, useCallback, useContext, useState } from 'react';

import { UpdateUserData } from 'common/constants/types';

import { AuthContext } from 'context/auth.context';
import { UserService } from 'services';

interface UserContextData {
  updateUser(data: UpdateUserData): Promise<void>;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { token, syncUser } = useContext(AuthContext);

  const userService: UserService = new UserService(syncUser);

  const updateUser = useCallback(async (userData: UpdateUserData) => {
    await userService.updateUserData(token, userData);
  }, []);

  return <UserContext.Provider value={{ updateUser }}>{children}</UserContext.Provider>;
}
