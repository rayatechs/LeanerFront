import { IRequest, IResponse } from "@/interfaces";
import { FormRequest } from "@/consts/schema/auth/register";
import { AUTH_REGISTER_URL } from "./url";
import UserResource from "@/interfaces/resources/user";
import instance from "@/api/instance";

export const authRegister = async (
  request: IRequest<FormRequest>
): Promise<IResponse<UserResource>> => {
  return await instance
    .post(AUTH_REGISTER_URL, request.data)
    .then((res) => res.data);
};
