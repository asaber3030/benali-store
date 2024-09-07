"use client"

import Image from "next/image"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

import { updateProductAction } from "@/actions/products"
import { productImages } from "@/lib/constants"
import { responseCodes } from "@/lib/response"
import { toast } from "sonner"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, Formik } from "formik"
import { SelectField } from "@/app/components/common/select"
import { InputField } from "@/app/components/common/input"
import { Button } from "@/app/components/common/button"
import { Edit } from "lucide-react"

import { UpdateProductFormValues } from "@/types"
import { ProductSchema } from "@/schema"
import { Product } from "@prisma/client"

type Props = { product: Product }

export const UpdateProductModal = ({ product }: Props) => {
  const updateMutation = useMutation({
    mutationFn: (values: UpdateProductFormValues) => updateProductAction(product.id, values),
    onSuccess: (data) => {
      if (data.status === responseCodes.ok) {
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    },
    onError: (data) => {
      toast.error(data.message)
    },
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border border-blue-500 text-blue-500 hover:bg-blue-100 h-8 bg-transparent" icon={Edit}>
          تعديل
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>تعديل المنتج</DialogTitle>
        </DialogHeader>
        <section>
          <Formik
            initialValues={{
              name: product.name,
              price: product.price,
              description: product.description,
              image: product.image,
            }}
            validationSchema={ProductSchema.update}
            onSubmit={(values: UpdateProductFormValues) => {
              console.log(values)
              updateMutation.mutate(values)
            }}
          >
            {({ errors, values }) => {
              return (
                <Form className="space-y-4">
                  <InputField name="name" label="اسم المنتج" error={errors.name} />
                  <InputField name="description" label="وصف المنتج" error={errors.description} />
                  <InputField type="number" name="price" label="سعر المنتج" error={errors.price} />
                  <InputField name="image" label="صورة المنتج" error={errors.image} />
                  <Button loading={updateMutation.isPending} className="w-full justify-center" icon={Edit}>
                    تعديل
                  </Button>
                </Form>
              )
            }}
          </Formik>
        </section>
      </DialogContent>
    </Dialog>
  )
}
