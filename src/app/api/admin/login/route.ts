import db from "@/services/prisma"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { NextRequest, NextResponse } from "next/server"
import { response, responseCodes } from "@/lib/response"

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json()

  const findUser = await db.admin.findUnique({ where: { email: body.email } })
  if (!findUser) return response(responseCodes.notFound, "Admin doesn't exist.")

  const comparePassword = await bcrypt.compare(body.password, findUser.password)
  if (!comparePassword) return response(responseCodes.notFound, "Invalid password.")

  const { password, ...user } = findUser
  const secret = process.env.ADMIN_SECRET!

  const token = jwt.sign(user, secret, {
    expiresIn: "30 days",
  })

  return response(responseCodes.ok, "Logged In Successfully", { token })
}
