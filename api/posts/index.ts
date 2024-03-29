import { ApiManager, IaxiosRequestConfig } from '@/utils/request';

import {
  CreatePostReq,
  CreatePostRes,
  DeletePostReq,
  DeletePostRes,
  FetchBlogDetailReq,
  FetchBlogDetailRes,
  FetchBlogLIstReq,
  FetchBlogLIstRes,
} from './type';

const baseConfig = <IaxiosRequestConfig>{
  baseURL: 'http://124.222.192.103:3000',
  timeout: 10000,
};

const PROXY_PREFIX = '/backend'

const Api = new ApiManager(baseConfig);

export const fetchPostList = async (data: FetchBlogLIstReq): Promise<FetchBlogLIstRes> => {
  const { result } = await Api.get(`${PROXY_PREFIX}/posts/list`, data);
  return result;
};

export const createPost = async (data: CreatePostReq): Promise<CreatePostRes> => {
  const { result } = await Api.post(`${PROXY_PREFIX}/posts/create-post`, data);
  return result;
};

export const fetchPostDetail = async (data: FetchBlogDetailReq): Promise<FetchBlogDetailRes> => {
  const { result } = await Api.get(`${PROXY_PREFIX}/posts/detail/${data.blogId}`);
  return result;
};

export const DeletePost = async (data: DeletePostReq): Promise<DeletePostRes> => {
  const { result } = await Api.delete(`${PROXY_PREFIX}/posts/delete-post/${data.blogId}`);
  return result;
};
