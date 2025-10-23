import { IRequest, IResponse } from "@/api/resource";
import instance from "@/api/instance";

import {
  WORKSPACES_API,
} from "./url";

import { FormRequest } from "@/consts/schema/workspaces/create";
import { WorkspaceResource } from "./resource";
import { apiGet, apiPost } from "../request";

export const getWorkspaces = (request: any) =>
  apiGet<{}, Array<WorkspaceResource>>(WORKSPACES_API, request);

export const createWorkspace = (request: IRequest<FormRequest>) =>
  apiPost<FormRequest, WorkspaceResource>(WORKSPACES_API, request);

export const updateWorkspace = async (
  workspaceId: string,
  form: FormRequest
): Promise<IResponse<WorkspaceResource>> => {
  const res = await instance.patch(`${WORKSPACES_API}/${workspaceId}`, form);
  return res.data;
};

export const deleteWorkspace = async (
  workspaceId: string
): Promise<IResponse<null>> => {
  const res = await instance.delete(`${WORKSPACES_API}/${workspaceId}`);
  return res.data;
};