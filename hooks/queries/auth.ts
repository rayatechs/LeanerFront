import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { authRegister } from "@/api/auth";
import { FormRequest } from "@/consts/schema/auth/register";
import { IRequest, IValidationError, IResponse } from "@/interfaces";
import UserResource from "@/interfaces/resources/user";

export const useAuthRegister = (): UseMutationResult<
  IResponse<UserResource>,
  IValidationError<UserResource>,
  IRequest<FormRequest>
> => {
  return useMutation({
    mutationFn: (data) => authRegister(data),
  });
};
