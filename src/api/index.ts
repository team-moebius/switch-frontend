import globalAxios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

import * as API from '@team-moebius/api-typescript';
import { setBearerAuthToObject } from '@team-moebius/api-typescript/common';

import { expoSecureStore } from 'src/common/secureStore';

/* 전역 axios 인스턴스에 interceptor 설정 */
globalAxios.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    const configuration = new API.Configuration();
    const token = await expoSecureStore.getToken('token');

    if (token) {
      configuration.accessToken = token;
      await setBearerAuthToObject(config.headers, configuration);
    }

    return config;
  }
);

globalAxios.interceptors.response.use(
  async (config: AxiosResponse): Promise<AxiosResponse> => {
    if ('jwtToken' in config.data)
      await expoSecureStore.setToken('token', config.data.jwtToken);

    return config;
  }
);

const BookMarkApi = new API.BookmarkAPIApi();
const ItemApi = new API.ItemAPIApi();
const ReportAPI = new API.UserAPIApi();
const SwitchAPI = new API.SwitchAPIApi();
const UserApi = new API.UserAPIApi();

export { BookMarkApi, ItemApi, ReportAPI, SwitchAPI, UserApi };
