import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

import config from 'config';
import { AppAPI, handleHttpError } from 'common/libs/axios';
import { AuthenticatedUser, SigninData, SignupData, SocialProfileData } from 'common/constants/types';

export class AuthService {
  private readonly tokenKey = '@userToken';

  constructor(private readonly setToken: React.Dispatch<React.SetStateAction<string | null>>) {}

  async loadUserToken(): Promise<void> {
    try {
      const jsonValue: string | null = await AsyncStorage.getItem(this.tokenKey);
      if (jsonValue !== null) {
        await this.saveUserToken(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async signUp(data: SignupData): Promise<void> {
    await AppAPI.post(`/users`, data, {
      headers: {
        masterKey: config['MASTER_KEY'],
      },
    }).then((response) => this.saveUserToken(response.data));
  }

  async signIn(data: SigninData): Promise<void> {
    const auth = base64.encode(`${data.email}:${data.password}`);
    await AppAPI.get(`/auth`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }).then((response) => this.saveUserToken(response.data));
  }

  async signOut(): Promise<void> {
    await AsyncStorage.removeItem(this.tokenKey)
      .then(() => {
        this.setToken(null);
      })
      .catch(handleHttpError);
  }

  //===============================================================================
  async socialAuth(data: SocialProfileData, brand: string): Promise<void> {
    console.log({ brand, data });

    await AppAPI.post(`/users/${brand}`, data, {
      headers: {
        masterKey: config['MASTER_KEY'],
      },
    }).then((response) => this.saveUserToken(response.data));
  }

  private async saveUserToken(authenticatedUser: AuthenticatedUser): Promise<void> {
    this.setToken(authenticatedUser.token ?? null);

    const token = JSON.stringify({ token: authenticatedUser.token });
    await AsyncStorage.setItem(this.tokenKey, token).catch(handleHttpError);
  }
}
