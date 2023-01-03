/* eslint-disable no-useless-catch */
/* eslint-disable no-console */
import axios, { AxiosResponse, AxiosRequestHeaders } from 'axios';

interface IAxios<P, B> {
  url: string;
  params?: P;
  body?: B;
  data?: B;
  headers?: AxiosRequestHeaders;
}

export const useAxios = () => {
  const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const GET = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>
  ): Promise<AxiosResponse<R>> => {
    console.log('args', args);

    try {
      return await instance({
        ...args,
        method: 'GET',
      });
    } catch (e) {
      throw e;
    }
  };

  const POST = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>
  ): Promise<AxiosResponse<R>> => {
    try {
      return await instance({
        ...args,
        method: 'POST',
      });
    } catch (e) {
      throw e;
    }
  };

  const PUT = async <P, B>(args: IAxios<P, B>): Promise<AxiosResponse> => {
    try {
      return await instance({
        ...args,
        method: 'PUT',
      });
    } catch (e) {
      throw e;
    }
  };

  const DELETE = async <P, B>(args: IAxios<P, B>): Promise<AxiosResponse> => {
    try {
      return await instance({
        ...args,
        method: 'DELETE',
      });
    } catch (e) {
      throw e;
    }
  };

  return {
    instance,
    GET,
    POST,
    PUT,
    DELETE,
  };
};
