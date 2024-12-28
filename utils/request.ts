import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export * from 'axios';

export const enum ContentType {
  // json
  JSON = 'application/json;charset=UTF-8',
  // text
  TEXT = 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data 上传
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

export const buildQueryString = (baseUrl: string, params: Record<string, any>) => {
  const queryString = Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  return `${baseUrl}?${queryString}`;
};

export interface IAxiosRequestConfig extends AxiosRequestConfig {
  retryDelay?: number;
  retryCount?: number;
  baseURL?: string;
  timeout?: number;
}

export class ApiManager {
  private readonly axiosInstance: AxiosInstance;

  constructor(config: IAxiosRequestConfig = {}) {
    this.axiosInstance = axios.create({
      baseURL: config.baseURL ?? 'https://api.example.com',
      timeout: config.timeout ?? 10000,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 在请求发送前可添加全局配置，例如身份验证信息
        // config.headers['Authorization'] = `Bearer ${yourToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 在响应处理前可以进行全局的数据转换或其他操作
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public async request(config: IAxiosRequestConfig) {
    let retries = config.retryCount ?? 3;
    while (retries > 0) {
      try {
        const response = await this.axiosInstance(config);
        return response.data;
      } catch (error) {
        if (retries === 1) {
          // 最后一次重试仍然失败，抛出错误
          throw error;
        }
        await new Promise((resolve) => setTimeout(resolve, config.retryDelay ?? 3000));
        retries--;
      }
    }
  }

  public get(url: string, data?: any, config: AxiosRequestConfig = {}) {
    return this.request({
      method: 'get',
      url: data ? buildQueryString(url, data) : url,
      ...config,
    });
  }

  public post(url: string, data: any, config: AxiosRequestConfig = {}) {
    return this.request({
      method: 'post',
      url,
      data,
      ...config,
    });
  }

  public delete(url: string, data?: any, config: AxiosRequestConfig = {}) {
    return this.request({
      method: 'delete',
      url: data ? buildQueryString(url, data) : url,
      ...config,
    });
  }

  // 添加其他 HTTP 方法如 put 等
}