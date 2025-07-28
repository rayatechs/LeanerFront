import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { IRequest, IValidationError, IResponse } from "@/interfaces";
import { authRegister, authVerification } from "@/api/auth";
import UserResource from "@/interfaces/resources/user";
import AuthResource from "@/interfaces/resources/auth";
import { FormRequest as RegisterFormRequest } from "@/consts/schema/auth/register";
import { FormRequest as VerificaitonFormRequest } from "@/consts/schema/auth/verification";

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
