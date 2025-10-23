type url = `/api/v1/workspaces${string}`;

export const WORKSPACES_INVITATION_API: url = "/api/v1/workspaces/{workspace}/invitations";
export const DELETE_WORKSPACES_INVITATION_API: url = "/api/v1/workspaces/{workspace}/invitations/{invitation}";
export const ACCEPT_WORKSPACES_INVITATION_API: url = "/api/v1/workspaces/invitations/accept/{token}";