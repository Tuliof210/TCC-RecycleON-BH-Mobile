import { AppAPI } from 'common/libs/axios';

import { User, UpdateUserData, SigninData } from 'common/constants/types';

export class UserService {
  constructor(private readonly syncUser: (token: string | null) => Promise<void>) {}

  async updateUserData(token: string | null, userData: UpdateUserData): Promise<void> {
    if (token) {
      await AppAPI.patch('/users/me', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => {
          console.log(data.data);
          this.syncUser(token);
        })
        .catch(this.handleError);
    }
  }

  private handleError(error: any) {
    console.log(error);
  }
}
