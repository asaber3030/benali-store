"use client"

import Image from "next/image"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

import { createProductAction } from "@/actions/products"
import { productImages } from "@/lib/constants"
import { responseCodes } from "@/lib/response"
import { toast } from "sonner"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, Formik } from "formik"
import { SelectField } from "@/app/components/common/select"
import { InputField } from "@/app/components/common/input"
import { Button } from "@/app/components/common/button"
import { Plus } from "lucide-react"

import { CreateProductFormValues } from "@/types"
import { ProductSchema } from "@/schema"
import { Category } from "@prisma/client"

type Props = { categories: Category[] }

export const CreateProductModal = ({ categories }: Props) => {
  const [open, setOpen] = useState(false)

  const createMutation = useMutation({
    mutationFn: (values: CreateProductFormValues) => createProductAction(values),
    onSuccess: (data) => {
      if (data.status === responseCodes.ok) {
        toast.success(data.message)
        setOpen(false)
      } else {
        toast.error(data.message)
      }
    },
    onError: (data) => {
      toast.error(data.message)
    },
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-4 text-sm h-8 w-full bg-green-600 hover:bg-green-600/90" icon={Plus}>
          اضافة منتج
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>اضافة المنتج</DialogTitle>
        </DialogHeader>

        <section>
          <Formik
            initialValues={{
              name: "",
              description: "",
              image: "",
              price: 0,
              categoryId: categories[0].id,
            }}
            validationSchema={ProductSchema.create}
            onSubmit={(values: CreateProductFormValues) => {
              createMutation.mutate(values)
            }}
          >
            {({ errors, values }) => {
              return (
                <Form className="space-y-4">
                  <InputField name="name" label="اسم المنتج" error={errors.name} />
                  <InputField name="description" label="وصف المنتج" error={errors.description} />
                  <InputField type="number" name="price" label="سعر المنتج" error={errors.price} />
                  <InputField name="image" label="صورة المنتج" error={errors.image} />
                  <SelectField name="categoryId" label="القسم" error={errors.categoryId}>
                    {categories.map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </SelectField>
                  <Button loading={createMutation.isPending} className="w-full justify-center bg-green-600 hover:bg-green-600/90" icon={Plus}>
                    اضافة
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
