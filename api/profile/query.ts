import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";
import { IRequest, IValidationError, IResponse } from "@/interfaces";
import { getUserProfile, updateAvatar } from "./index";
import { FormRequest as AvartarFormRequest } from "@/consts/schema/settings/avatar";
import ProfileResource from "@/interfaces/resources/profile";

export const useProfileAvatarUpdate = (): UseMutationResult<
  IResponse<any>,
  IValidationError<any>,
  IRequest<AvartarFormRequest>
> => {
  return useMutation({
    mutationFn: (data) => updateAvatar(data),
  });
};
