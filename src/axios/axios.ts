import axios, { InternalAxiosRequestConfig } from "axios";
import {
  successResponseHandler,
  requestHandler,
  errorResponseHandler,
} from "./interceptors";

const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(
    successResponseHandler,
    errorResponseHandler
  );
  return instance;
};

export default getAxiosInstance();
