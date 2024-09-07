"use server"

import { APIResponse, AdminLoginFormValues } from "@/types"
import { Admin } from "@prisma/client"

import { apiURL, cookieAdminName } from "@/lib/constants"
import { getHeaders } from "@/services/api"
import { cookies } from "next/headers"

type LoginResponseData = { token: string }

export async function loginAdminAction(values: AdminLoginFormValues): Promise<APIResponse<LoginResponseData>> {
  const loginRequest = await fetch(`${apiURL}/admin/login`, {
    method: "POST",
    body: JSON.stringify(values),
  })
  const data = await loginRequest.json()
  cookies().set(cookieAdminName, data?.data?.token)
  return data
}

export async function getAdmin(): Promise<Admin | undefined> {
  const token = cookies().get(cookieAdminName)?.value
  const requestUser = await fetch(`${apiURL}/admin`, getHeaders(token))
  const response: APIResponse<Admin> = await requestUser.json()
  const admin: Admin | undefined = response.data
  return admin
}
