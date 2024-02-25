import { ApiManager, IaxiosRequestConfig } from '@/utils/request';

import { FetchUserInfoReq, FetchUserInfoRes } from './type';

const baseConfig = <IaxiosRequestConfig>{
  baseURL: 'http://124.222.192.103:3000',
  timeout: 10000,
};

const PROXY_PREFIX = '/backend'

const Api = new ApiManager(baseConfig);

export const getUserInfo = async (data: FetchUserInfoReq): Promise<FetchUserInfoRes> => {
  const { result } = await Api.get(`${PROXY_PREFIX}/personal-info/user/${data.userId}`);
  return result;
};
