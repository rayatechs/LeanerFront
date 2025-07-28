import UserResource from "./user";

export default interface AuthResource {
  user: UserResource;
  access_token: string;
}
