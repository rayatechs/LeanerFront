export interface ProfileReferencesResource {
    timezone: string;
    language: string;
    appearance: string;
    theme_color: string;
}

export interface ProfileResource {
  id: number;
  email: string;
  full_name: string;
  mobile: string;
  bio: string;
  preferences: ProfileReferencesResource,
  email_verification_at: Date;
  last_login_at: Date;
  created_at: Date;
  updated_at: Date;
}
