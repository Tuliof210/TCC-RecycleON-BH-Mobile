import axios from 'axios';
import config from 'config';

export const AppAPI = axios.create({
  baseURL: config['APP_API'],
  timeout: 10000,
});

export const handleHttpError = (error: any) => {
  console.log(error);
};
