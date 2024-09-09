import { Product, ProductPrice } from "@prisma/client"

export type APIResponse<T> = {
  message: string
  status: number
  data?: T
}

export type AdminLoginFormValues = {
  email: string
  password: string
}

export type UpdateProductFormValues = {
  name: string
  description: string
  image: string
  price: number
}
export type CreateProductFormValues = {
  name: string
  description: string
  image: string
  price: number
  categoryId: number
}

export type UpdateCategoryFormValues = {
  name: string
}
export type CreateCategoryFormValues = {
  name: string
}
export type CreatePriceFormValues = {
  title: string
  price: number
}
export type UpdatePriceFormValues = {
  title: string
  price: number
}

export type FullProduct = Product & {
  prices: ProductPrice[]
}
