"use server";

import { getCookie, setCookie } from "./cookie";

export async function getToken(): Promise<string | undefined> {
  const token = getCookie("token").then((token) => token);
  return await token;
}

export async function setToken(token: string) {
  await setCookie("token", token);
}
