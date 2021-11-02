import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

import config from 'config';
import { AppAPI, handleHttpError } from 'common/libs/axios';
import { AuthenticatedUser, SigninData, SignupData, User } from 'common/constants/types';

export class AuthService {
  private readonly userKey = '@userData';

  constructor(
    private readonly setToken: React.Dispatch<React.SetStateAction<string | null>>,
    private readonly setUser: React.Dispatch<React.SetStateAction<User | null>>,
  ) {}

  async loadUserData(): Promise<void> {
    try {
      const jsonValue: string | null = await AsyncStorage.getItem(this.userKey);
      if (jsonValue !== null) {
        await this.saveUser(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async signUp(data: SignupData): Promise<void> {
    const response = await AppAPI.post(`/users`, data, {
      headers: {
        masterKey: config['MASTER_KEY'],
      },
    });
    this.saveUser(response.data);
  }

  async signIn(data: SigninData): Promise<void> {
    const auth = base64.encode(`${data.email}:${data.password}`);
    const response = await AppAPI.get(`/auth`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    this.saveUser(response.data);
  }

  private async saveUser(authenticatedUser: AuthenticatedUser): Promise<void> {
    this.setToken(authenticatedUser.token ?? null);
    this.setUser(authenticatedUser.user ?? null);

    const jsonValue = JSON.stringify(authenticatedUser);

    await AsyncStorage.setItem(this.userKey, jsonValue).catch(handleHttpError);
  }

  async signOut(): Promise<void> {
    await AsyncStorage.removeItem(this.userKey)
      .then(() => {
        this.setToken(null);
        this.setUser(null);
      })
      .catch(handleHttpError);
  }

  async syncUser(token: string | null): Promise<void> {
    if (token) {
      await AppAPI.get('/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => {
          const { _id, name, email } = data.data as User;
          this.setUser({ _id, name, email });
        })
        .catch(handleHttpError);
    }
  }
}
