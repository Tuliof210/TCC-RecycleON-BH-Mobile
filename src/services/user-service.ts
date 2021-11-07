import { AppAPI, handleHttpError } from 'common/libs/axios';

import { User, UpdateUserData } from 'common/constants/types';

export class UserService {
  constructor(private readonly setUser: React.Dispatch<React.SetStateAction<User | null>>) {}

  async updateUser(token: string | null, userData: UpdateUserData): Promise<void> {
    if (token) {
      await AppAPI.patch('/users/me', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          this.syncUser(token);
        })
        .catch(handleHttpError);
    }
  }

  async syncUser(token: string | null): Promise<void> {
    if (token) {
      await AppAPI.get('/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => {
          const { _id, name, email, bookmarks } = data.data as User;
          this.setUser({ _id, name, email, bookmarks });
        })
        .catch(handleHttpError);
    }
  }
}
