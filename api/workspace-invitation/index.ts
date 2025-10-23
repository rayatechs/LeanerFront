import { IRequest, IResponse } from "@/api/resource";
import instance from "@/api/instance";

import {
  WORKSPACES_INVITATION_API,
} from "./url";

import { FormRequest } from "@/consts/schema/workspaces/create";
import { WorkspaceInvitationResource } from "./resource";
import { apiPost } from "../request";

export const createWorkspaceInvitation = (request: IRequest<FormRequest>) =>
  apiPost<FormRequest, WorkspaceInvitationResource>(WORKSPACES_INVITATION_API, request);
