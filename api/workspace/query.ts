import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import {
  getWorkspaces,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
} from './index';
import { IRequest, IResponse, IValidationError } from "../resource";
import { WorkspaceResource } from "./resource";
import { FormRequest } from "@/consts/schema/workspaces/create";

export const useWorkspaces = () => {
  const queryClient = useQueryClient();

  const workspacesQuery = (): UseQueryResult<Array<WorkspaceResource>, Error> =>
  useQuery({
    queryKey: ['workspaces'],
    queryFn: getWorkspaces,
    staleTime: 1000 * 60 * 5, // 5 minutes
    select: (res) => res.data,
  });

  const createMutation = (): UseMutationResult<
    IResponse<WorkspaceResource>,
    IValidationError<WorkspaceResource>,
    IRequest<FormRequest>
  > => {
    return useMutation({
      mutationFn: (data) => createWorkspace(data),
    });
  };

  const updateMutation = useMutation({
    mutationFn: ({ id, form }: { id: string; form: any }) =>
      updateWorkspace(id, form),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['workspaces'] }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteWorkspace(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['workspaces'] }),
  });

  return {
    workspacesQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  };
};