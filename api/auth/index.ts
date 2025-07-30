import instance from "@/api/instance";
import { IRequest, IResponse } from "@/interfaces";
import {
  AUHT_LOGIN_URL,
  AUTH_FORGET_PASSWORD_URL,
  AUTH_REGISTER_URL,
  AUTH_RESEND_OTP_URL,
  AUTH_VERIFICATION_URL,
} from "./url";
import UserResource from "@/interfaces/resources/user";
import AuthResource from "@/interfaces/resources/auth";
import { FormRequest as RegisterFormRequest } from "@/consts/schema/auth/register";
import { FormRequest as VerificaitonFormRequest } from "@/consts/schema/auth/verification";
import { FormRequest as LoginFormRequest } from "@/consts/schema/auth/login";
import { FormRequest as ForgetPasswordFromRequest } from "@/consts/schema/auth/forget-password";

const apiPost = async <TRequest, TResponse>(
  url: string,
  request: IRequest<TRequest>
): Promise<IResponse<TResponse>> => {
  return await instance.post(url, request.data).then((res) => res.data);
};

export const authRegister = (request: IRequest<RegisterFormRequest>) =>
  apiPost<RegisterFormRequest, UserResource>(AUTH_REGISTER_URL, request);

export const authVerification = (request: IRequest<VerificaitonFormRequest>) =>
  apiPost<VerificaitonFormRequest, AuthResource>(
    AUTH_VERIFICATION_URL,
    request
  );

export const authResendOtp = (request: IRequest<{ email: string }>) =>
  apiPost<{ email: string }, any>(AUTH_RESEND_OTP_URL, request);

export const authLogin = (request: IRequest<LoginFormRequest>) =>
  apiPost<LoginFormRequest, AuthResource>(AUHT_LOGIN_URL, request);

export const authForgetPassword = (
  request: IRequest<ForgetPasswordFromRequest>
) =>
  apiPost<ForgetPasswordFromRequest, { success: boolean }>(
    AUTH_FORGET_PASSWORD_URL,
    request
  );
