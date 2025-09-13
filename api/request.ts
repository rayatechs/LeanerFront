import instance from "./instance";
import { IRequest, IResponse } from "./resource";

export const apiPost = async <TRequest, TResponse>(
  url: string,
  request: IRequest<TRequest>
): Promise<IResponse<TResponse>> => {
  return await instance.post(url, request.data).then((res) => res.data);
};

export const apiGet = async <TRequest, TResponse>(
  url: string,
  request: IRequest<TRequest>
): Promise<IResponse<TResponse>> => {
  return await instance
    .get(url, { params: request.data })
    .then((res) => res.data);
};

export const apiPatch = async <TRequest, TResponse>(
  url: string,
  request: IRequest<TRequest>
): Promise<IResponse<TResponse>> => {
  return await instance.patch(url, request.data).then((res) => res.data);
};

export const apiDelete = async <TRequest, TResponse>(
  url: string,
  request: IRequest<TRequest>
): Promise<IResponse<TResponse>> => {
  return await instance
    .delete(url, { data: request.data })
    .then((res) => res.data);
};
