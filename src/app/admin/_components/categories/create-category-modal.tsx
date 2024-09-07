"use client"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

import { createCategoryAction } from "@/actions/categories"
import { responseCodes } from "@/lib/response"
import { toast } from "sonner"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, Formik } from "formik"
import { InputField } from "@/app/components/common/input"
import { Button } from "@/app/components/common/button"
import { Plus } from "lucide-react"

import { CreateCategoryFormValues } from "@/types"
import { CategorySchema } from "@/schema"
import { Category } from "@prisma/client"

export const CreateCategoryModal = () => {
  const [open, setOpen] = useState(false)

  const createMutation = useMutation({
    mutationFn: (values: CreateCategoryFormValues) => createCategoryAction(values),
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
        <Button className="px-4 text-sm h-8 w-full bg-orange-400 hover:bg-orange-400/90" icon={Plus}>
          اضافة قسم
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>اضافة قسم</DialogTitle>
        </DialogHeader>

        <section>
          <Formik
            initialValues={{
              name: "",
            }}
            validationSchema={CategorySchema.create}
            onSubmit={(values: CreateCategoryFormValues) => {
              createMutation.mutate(values)
            }}
          >
            {({ errors }) => (
              <Form className="space-y-4">
                <InputField name="name" label="اسم المنتج" error={errors.name} />
                <Button loading={createMutation.isPending} className="w-full justify-center bg-green-600 hover:bg-green-600/90" icon={Plus}>
                  اضافة
                </Button>
              </Form>
            )}
          </Formik>
        </section>
      </DialogContent>
    </Dialog>
  )
}
