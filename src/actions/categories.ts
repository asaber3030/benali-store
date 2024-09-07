"use server"

import routes from "@/lib/routes"
import db from "@/services/prisma"

import { CreateCategoryFormValues, UpdateCategoryFormValues } from "@/types"

import { actionResponse, responseCodes } from "@/lib/response"
import { revalidatePath } from "next/cache"

export async function createCategoryAction(data: CreateCategoryFormValues) {
  try {
    await db.category.create({
      data,
    })
    revalidatePath(routes.adminDashboard())
    return actionResponse(responseCodes.ok, "تم اضافة القسم")
  } catch (error) {
    return actionResponse(responseCodes.serverError, "هناك خطأ في اضافة القسم.")
  }
}

export async function updateCategoryAction(id: number, data: UpdateCategoryFormValues) {
  try {
    await db.category.update({
      where: { id },
      data,
    })
    revalidatePath(routes.adminDashboard())
    return actionResponse(responseCodes.ok, "تم تعديل القسم")
  } catch (error) {
    return actionResponse(responseCodes.serverError, "هناك خطأ في تعديل القسم.")
  }
}

export async function deleteCategoryAction(id: number) {
  try {
    await db.category.delete({
      where: { id },
    })
    revalidatePath(routes.adminDashboard())
    return actionResponse(responseCodes.ok, "تم حذف القسم")
  } catch (error) {
    return actionResponse(responseCodes.serverError, "هناك خطأ في حذف القسم.")
  }
}
