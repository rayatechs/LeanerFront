import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { IRequest, IValidationError, IResponse } from "@/interfaces";
import {
  authLogin,
  authRegister,
  authResendOtp,
  authVerification,
} from "@/api/auth";
import UserResource from "@/interfaces/resources/user";
import AuthResource from "@/interfaces/resources/auth";
import { FormRequest as RegisterFormRequest } from "@/consts/schema/auth/register";
import { FormRequest as VerificaitonFormRequest } from "@/consts/schema/auth/verification";
import { FormRequest as LoginFormRequest } from "@/consts/schema/auth/login";

export const useAuthRegister = (): UseMutationResult<
  IResponse<UserResource>,
  IValidationError<UserResource>,
  IRequest<RegisterFormRequest>
> => {
  return useMutation({
    mutationFn: (data) => authRegister(data),
  });
};

export const useAuthVerification = (): UseMutationResult<
  IResponse<AuthResource>,
  IValidationError<AuthResource>,
  IRequest<VerificaitonFormRequest>
> => {
  return useMutation({
    mutationFn: (data) => authVerification(data),
  });
};

export const useAuthResendOtp = (): UseMutationResult<
  IResponse<any>,
  IValidationError<any>,
  IRequest<{ email: string }>
> => {
  return useMutation({
    mutationFn: (data) => authResendOtp(data),
  });
};

export const useAuthLogin = (): UseMutationResult<
  IResponse<AuthResource>,
  IValidationError<AuthResource>,
  IRequest<LoginFormRequest>
> => {
  return useMutation({
    mutationFn: (data) => authLogin(data),
  });
};
