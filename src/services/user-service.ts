import { AppAPI, handleHttpError } from 'common/libs/axios';

import { UpdateUserData } from 'common/constants/types';

export class UserService {
  constructor(private readonly syncUser: (token: string | null) => Promise<void>) {}

  async updateUserData(token: string | null, userData: UpdateUserData): Promise<void> {
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
}
