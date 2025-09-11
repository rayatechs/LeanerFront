import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { IRequest, IValidationError, IResponse } from "@/interfaces";
import {
  getProfile,
  updateAvatar,
  updateProfile
} from "@/api/profile";
import { FormRequest as AvartarFormRequest } from "@/consts/schema/settings/avatar";

export const useProfileAvatarUpdate = (): UseMutationResult<
  IResponse<any>,
  IValidationError<any>,
  IRequest<AvartarFormRequest>
> => {
  return useMutation({
    mutationFn: (data) => updateAvatar(data),
  });
};