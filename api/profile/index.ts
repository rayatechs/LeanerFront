import { IRequest } from "@/interfaces";

import {
  PROFILE_UPDATE_USER,
} from "./url";

import { FormRequest as AvartarFormRequest } from "@/consts/schema/settings/avatar";
import { apiPatch } from "../request";

export const updateAvatar = (request: IRequest<AvartarFormRequest>) =>
  apiPatch<AvartarFormRequest, {}>(PROFILE_UPDATE_USER, request);
