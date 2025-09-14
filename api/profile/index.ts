import { IRequest, IResponse } from "@/api/resource";

import {
  PROFILE_UPDATE_USER,
  PROFILE_GET_USER
} from "./url";

import { FormRequest as AvartarFormRequest } from "@/consts/schema/settings/avatar";
import { FormRequest as ProfileFormRequest } from "@/consts/schema/settings/profile";
import { apiGet, apiPatch } from "../request";
import { ProfileResource } from "./resource";

export const updateAvatar = (request: IRequest<AvartarFormRequest>) =>
  apiPatch<AvartarFormRequest, {}>(PROFILE_UPDATE_USER, request);

export const getUserProfile = (request: any) =>
  apiGet<{}, ProfileResource>(PROFILE_GET_USER, request);

export const updateUserProfile = (request: IRequest<ProfileFormRequest>) =>
  apiPatch<ProfileFormRequest, IResponse<any>>(PROFILE_UPDATE_USER, request);