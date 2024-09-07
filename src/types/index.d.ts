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
