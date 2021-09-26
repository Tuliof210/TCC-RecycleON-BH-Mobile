import base64 from 'react-native-base64';

import config from 'config';
import { AppAPI } from 'common/libs/axios';

import { AuthenticatedUser, SigninData, SignupData } from 'common/constants/types';

export class AuthService {
  async signUp(data: SignupData): Promise<AuthenticatedUser> {
    const response = await AppAPI.post(`/users`, data, {
      headers: {
        masterKey: config['MASTER_KEY'],
      },
    });
    return response.data as AuthenticatedUser;
  }

  async signIn(data: SigninData): Promise<AuthenticatedUser> {
    const auth = base64.encode(`${data.email}:${data.password}`);
    const response = await AppAPI.get(`/auth`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    return response.data as AuthenticatedUser;
  }
}
