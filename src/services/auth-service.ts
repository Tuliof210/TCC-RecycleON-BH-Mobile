import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

import config from 'config';
import { AppAPI } from 'common/libs/axios';
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
      console.log({ jsonValue });
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

    console.log({ authenticatedUser });

    const jsonValue = JSON.stringify(authenticatedUser);
    try {
      await AsyncStorage.setItem(this.userKey, jsonValue);
    } catch (error) {
      console.log(error);
    }
  }

  async signOut(): Promise<void> {
    try {
      await AsyncStorage.removeItem(this.userKey);
      this.setToken(null);
      this.setUser(null);
    } catch (error) {
      console.log(error);
    }
  }
}
