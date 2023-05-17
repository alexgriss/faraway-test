import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

import { BASE_URL } from './constants';

const basicAxiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  params: {
    format: 'json',
  },
};

export const axios: AxiosInstance = Axios.create(basicAxiosConfig);
