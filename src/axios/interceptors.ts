import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

export const requestHandler = (request: InternalAxiosRequestConfig) => {
  /* .... */
  return request;
};

export const successResponseHandler = (response: AxiosResponse) => {
  return {
    ...response,
    data: response.data,
  };
};

export const errorResponseHandler = (error: AxiosError) => {
  return Promise.reject(error);
};
