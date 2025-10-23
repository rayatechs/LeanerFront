import { useMutation, UseMutationResult } from "@tanstack/react-query";
import {
  createWorkspaceInvitation,
} from './index';
import { IRequest, IResponse, IValidationError } from "../resource";
import { WorkspaceInvitationResource } from "./resource";
import { FormRequest } from "@/consts/schema/workspaces/create";

export const useWorkspaceInvitations = () => {
  const createMutation = (): UseMutationResult<
    IResponse<WorkspaceInvitationResource>,
    IValidationError<WorkspaceInvitationResource>,
    IRequest<FormRequest>
  > => {
    return useMutation({
      mutationFn: (data) => createWorkspaceInvitation(data),
    });
  };

  return {
    createMutation,
  };
};