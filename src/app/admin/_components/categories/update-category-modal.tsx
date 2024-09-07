"use client"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

import { createCategoryAction, updateCategoryAction } from "@/actions/categories"
import { responseCodes } from "@/lib/response"
import { toast } from "sonner"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, Formik } from "formik"
import { InputField } from "@/app/components/common/input"
import { Button } from "@/app/components/common/button"
import { Edit, Plus } from "lucide-react"

import { CreateCategoryFormValues } from "@/types"
import { CategorySchema } from "@/schema"
import { Category } from "@prisma/client"

export const UpdateCategoryModal = ({ category }: { category: Category }) => {
  const [open, setOpen] = useState(false)

  const updateMutation = useMutation({
    mutationFn: (values: CreateCategoryFormValues) => updateCategoryAction(category.id, values),
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
        <Button className="px-4 text-sm h-8 w-full bg-green-600 hover:bg-green-600/90" icon={Edit}>
          تعديل القسم
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>تعديل قسم</DialogTitle>
        </DialogHeader>

        <section>
          <Formik
            initialValues={{
              name: category.name,
            }}
            validationSchema={CategorySchema.create}
            onSubmit={(values: CreateCategoryFormValues) => {
              updateMutation.mutate(values)
            }}
          >
            {({ errors }) => (
              <Form className="space-y-4">
                <InputField name="name" label="اسم المنتج" error={errors.name} />
                <Button loading={updateMutation.isPending} className="w-full justify-center bg-green-600 hover:bg-green-600/90" icon={Edit}>
                  تعديل
                </Button>
              </Form>
            )}
          </Formik>
        </section>
      </DialogContent>
    </Dialog>
  )
}
