import * as API from '@team-moebius/api-typescript';
import { setBearerAuthToObject } from '@team-moebius/api-typescript/common';
import globalAxios, { InternalAxiosRequestConfig } from 'axios';
import { expoSecureStore } from 'src/common/secureStore';

// 전역 axios 인스턴스에 interceptor 설정
globalAxios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const configuration = new API.Configuration();

    // token이 있으면 할당 헤더에 넣어준다.
    // 오히려 phoneSubmit이나 validation에서는 이 부분이 필요없이 때문에 알
    const token = await expoSecureStore.getToken('token');
    if (token) configuration.accessToken = token;

    setBearerAuthToObject(config.headers, configuration);
    console.debug('⛔️ interceptor running :: ', config);
    return config;
  }
);

const BookMarkApi = new API.BookmarkAPIApi();
const ItemApi = new API.ItemAPIApi();
const ReportAPI = new API.UserAPIApi();
const SwitchAPI = new API.SwitchAPIApi();
const UserApi = new API.UserAPIApi();

export { BookMarkApi, ItemApi, ReportAPI, SwitchAPI, UserApi };
