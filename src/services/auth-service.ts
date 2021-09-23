import axios from 'axios';
import base64 from 'react-native-base64';

import config from 'config';

import { AuthenticatedUser, SigninData, SignupData } from 'common/constants/types';

export default class AuthService {
  private readonly api = axios.create({
    baseURL: config['APP_API'],
    timeout: 10000,
  });

  async signUp(data: SignupData): Promise<AuthenticatedUser> {
    const response = await this.api.post(`/users`, data, {
      headers: {
        masterKey: config['MASTER_KEY'],
      },
    });
    return response.data as AuthenticatedUser;
  }

  async signIn(data: SigninData): Promise<AuthenticatedUser> {
    const auth = base64.encode(`${data.email}:${data.password}`);
    const response = await this.api.get(`/auth`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    return response.data as AuthenticatedUser;
  }
}
