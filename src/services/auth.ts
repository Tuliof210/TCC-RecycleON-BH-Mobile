import axios from 'axios';
import base64 from 'react-native-base64';

import config from 'config';

type AuthenticatedUser = {
  token: string;
  user: object;
};

export default class AuthService {
  private readonly api = axios.create({
    baseURL: config['APP_API'],
    timeout: 10000,
  });

  async login({ email, password }: { email: string; password: string }): Promise<AuthenticatedUser> {
    const auth = base64.encode(`${email}:${password}`);
    const response = await this.api.get(`/auth`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    return response.data as AuthenticatedUser;
  }

  async signup({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<AuthenticatedUser> {
    const response = await this.api.post(
      `/users`,
      { name, email, password },
      {
        headers: {
          masterKey: config['MASTER_KEY'],
        },
      },
    );
    return response.data as AuthenticatedUser;
  }
}
