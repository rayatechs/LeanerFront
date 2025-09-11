"use server";

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function getCookie<T extends string>(
  name: string
): Promise<T | string | undefined> {
  const cookieStore = await cookies();
  const value = cookieStore.get(name)?.value;
  return value ? value : undefined;
}

export async function setCookie<T extends string>(
  name: string,
  value: T,
  options?: ResponseCookie
) {
  const cookieStore = await cookies();
  cookieStore.set(name, value, {
    ...options,
    maxAge: options?.maxAge ? options.maxAge : 5 * 24 * 60 * 60 * 1000, // 5 day's
  });
}

export async function deleteCookie(
  name: string
) {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}