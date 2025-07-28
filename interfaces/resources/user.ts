import UserMetaResource from "./user-meta";

export default interface UserResource {
  id: number;
  full_name: string;
  email: string;
  email_verification_at: Date;
  last_login_at: Date;
  created_at: Date;
  meta: UserMetaResource;
}
