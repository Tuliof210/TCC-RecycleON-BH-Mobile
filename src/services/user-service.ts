import config from 'config';
import { AppAPI } from 'common/libs/axios';

import { UpdateUserData, SigninData } from 'common/constants/types';

export class UserService {
  constructor(private readonly signInHandler: (data: SigninData) => Promise<void>) {}

  async updateUserData(token: string | null, userData: UpdateUserData): Promise<void> {
    if (token) {
      await AppAPI.patch('/users/me', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(this.signInWithUpdatedData)
        .catch(this.handleError);
    }
  }

  private async signInWithUpdatedData(data: any): Promise<void> {
    console.log(data);
    return this.signInHandler({ email: '', password: '' });
  }

  private handleError(error: any) {
    console.log(error);
  }
}
