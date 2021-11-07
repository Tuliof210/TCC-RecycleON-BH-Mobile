import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { User, UpdateUserData } from 'common/constants/types';

import { AuthContext } from 'context/auth.context';
import { UserService } from 'services';

interface UserContextData {
  user: User | null;
  updateUser(userData: UpdateUserData): Promise<void>;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState<User | null>(null);

  const userService: UserService = new UserService(setUser);

  useEffect(() => {
    (async () => {
      await userService.syncUser(token);
    })();
  }, []);

  const updateUser = useCallback(async (userData: UpdateUserData) => {
    console.log({ userData });
    await userService.updateUser(token, userData);
  }, []);

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
}
