import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";
import { IRequest, IValidationError, IResponse } from "@/api/resource";
import { getUserProfile, updateAvatar, updateUserProfile } from "./index";
import { FormRequest as AvartarFormRequest } from "@/consts/schema/settings/avatar";
import { ProfileResource } from "./resource";

export const useProfileAvatarUpdate = (): UseMutationResult<
  IResponse<any>,
  IValidationError<any>,
  IRequest<AvartarFormRequest>
> => {
  return useMutation({
    mutationFn: (data) => updateAvatar(data),
  });
};

export const useProfileUser = (): UseQueryResult<ProfileResource, Error> =>
  useQuery({
    queryKey: ["profile-user"],
    queryFn: getUserProfile,
    staleTime: 1000 * 60 * 5, // 5 minutes
    select: (res) => res.data, // assuming apiGet returns { data: ProfileResource }
  });

export const useUpdateProfileUser = (): UseMutationResult<
  IResponse<any>,
  IValidationError<any>,
  IRequest<any>
> => {
  return useMutation({
    mutationFn: (data) => updateUserProfile(data),
  });
}