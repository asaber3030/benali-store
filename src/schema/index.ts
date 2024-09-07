import * as Yup from "yup"

export const AdminSchema = {
  login: Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  }),
}

export const ProductSchema = {
  update: Yup.object().shape({
    name: Yup.string().required("اجباري!").optional(),
    description: Yup.string().required("اجباري").optional(),
    price: Yup.number().min(0, "لا يمكن للسعر ان يكون 0").required("اجباري").optional(),
    image: Yup.string().required("اجباري").optional(),
  }),
  create: Yup.object().shape({
    name: Yup.string().required("اجباري!"),
    description: Yup.string().required("اجباري"),
    price: Yup.number().min(0, "لا يمكن للسعر ان يكون 0").required("اجباري"),
    categoryId: Yup.number().min(0, "لا يمكن لرقم للقسم ان يكون 0").required("اجباري"),
    image: Yup.string().required("اجباري"),
  }),
}

export const CategorySchema = {
  update: Yup.object().shape({
    name: Yup.string().required("اجباري!").optional(),
  }),
  create: Yup.object().shape({
    name: Yup.string().required("اجباري!"),
  }),
}
