export interface UserMetaResource {
  mobile: string;
  bio: string;
  timezone: string;
  language: string;
  preferences: string;
}

export interface UserResource {
  id: number;
  full_name: string;
  email: string;
  email_verification_at: Date;
  last_login_at: Date;
  created_at: Date;
  meta: UserMetaResource;
}

export interface AuthResource {
  user: UserResource;
  access_token: string;
}

