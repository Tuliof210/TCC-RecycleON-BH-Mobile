import axios from 'axios';
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

  async logon({ email, password }: { email: string; password: string }): Promise<AuthenticatedUser> {
    const response = await this.api.get(`/auth`, {
      auth: {
        username: email,
        password,
      },
    });
    return response.data as AuthenticatedUser;
  }

  async signin({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<AuthenticatedUser> {
    console.log(config['MASTER_KEY']);
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
