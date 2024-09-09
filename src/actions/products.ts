"use server"

import routes from "@/lib/routes"
import db from "@/services/prisma"

import { CreatePriceFormValues, CreateProductFormValues, UpdatePriceFormValues, UpdateProductFormValues } from "@/types"

import { actionResponse, responseCodes } from "@/lib/response"
import { revalidatePath } from "next/cache"

// Product Actions
export async function createProductAction(data: CreateProductFormValues) {
  try {
    await db.product.create({
      data: { ...data, price: +data.price, categoryId: +data.categoryId },
    })
    revalidatePath(routes.adminDashboard())
    revalidatePath("/")
    return actionResponse(responseCodes.ok, "تم اضافة المنتج")
  } catch (error) {
    return actionResponse(responseCodes.serverError, "هناك خطأ في اضافة المنتج.")
  }
}

export async function updateProductAction(id: number, data: UpdateProductFormValues) {
  try {
    await db.product.update({
      where: { id },
      data: { ...data, price: +data.price },
    })
    revalidatePath(routes.adminDashboard())
    revalidatePath("/")
    return actionResponse(responseCodes.ok, "تم تعديل المنتج")
  } catch (error) {
    return actionResponse(responseCodes.serverError, "هناك خطأ في تعديل المنتج.")
  }
}

export async function deleteProductAction(id: number) {
  try {
    await db.product.delete({
      where: { id },
    })
    revalidatePath(routes.adminDashboard())
    revalidatePath("/")
    return actionResponse(responseCodes.ok, "تم حذف المنتج")
  } catch (error) {
    return actionResponse(responseCodes.serverError, "هناك خطأ في حذف المنتج.")
  }
}

// Product Prices
export async function createPriceAction(productId: number, data: CreatePriceFormValues) {
  try {
    await db.productPrice.create({
      data: { productId, ...data },
    })
    revalidatePath(routes.adminDashboard())
    revalidatePath("/")
    return actionResponse(responseCodes.ok, "تم اضافة السعر")
  } catch (error) {
    return actionResponse(responseCodes.serverError, "هناك خطأ في اضافة السعر.")
  }
}

export async function updatePriceAction(id: number, data: UpdatePriceFormValues) {
  try {
    await db.productPrice.update({
      where: { id },
      data,
    })
    revalidatePath(routes.adminDashboard())
    revalidatePath("/")
    return actionResponse(responseCodes.ok, "تم تعديل السعر")
  } catch (error) {
    return actionResponse(responseCodes.serverError, "هناك خطأ في تعديل السعر.")
  }
}

export async function deletePriceAction(id: number) {
  try {
    await db.productPrice.delete({
      where: { id },
    })
    revalidatePath(routes.adminDashboard())
    revalidatePath("/")
    return actionResponse(responseCodes.ok, "تم حذف السعر")
  } catch (error) {
    return actionResponse(responseCodes.serverError, "هناك خطأ في حذف السعر.")
  }
}
