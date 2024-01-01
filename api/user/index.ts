import { ApiManager, IaxiosRequestConfig } from '@/utils/request';

import { FetchUserInfoReq, FetchUserInfoRes } from './type';

const baseConfig = <IaxiosRequestConfig>{
  baseURL: 'http://124.222.192.103:3000',
  timeout: 10000,
};

const Api = new ApiManager(baseConfig);

export const getUserInfo = async (data: FetchUserInfoReq): Promise<FetchUserInfoRes> => {
  const { result } = await Api.get(`/personal-info/user/${data.userId}`);
  return result;
};
