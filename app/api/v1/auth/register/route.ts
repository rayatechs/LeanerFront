import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  return NextResponse.json({
    data: {
      id: 0,
      full_name: "string",
      email: "string",
      email_verified_at: "string",
      last_login_at: "string",
      created_at: "string",
      meta: {
        mobile: "string",
        bio: "string",
        timezone: "string",
        language: "string",
        preferences: "string",
      },
    },
  });
}
