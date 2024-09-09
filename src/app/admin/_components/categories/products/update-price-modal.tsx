import { Button } from "@/app/components/common/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

import { responseCodes } from "@/lib/response"
import { toast } from "sonner"
import { updatePriceAction } from "@/actions/products"

import { Form, Formik } from "formik"
import { InputField } from "@/app/components/common/input"
import { Plus } from "lucide-react"

import { UpdatePriceFormValues } from "@/types"
import { PriceSchema } from "@/schema"
import { ProductPrice } from "@prisma/client"

type Props = { price: ProductPrice }

export const UpdatePriceModal = ({ price }: Props) => {
  const [open, setOpen] = useState(false)

  const updateMutation = useMutation({
    mutationFn: (values: UpdatePriceFormValues) => updatePriceAction(price.id, values),
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
        <Button className="h-7 bg-transparent px-0 text-gray-500 hover:bg-transparent hover:underline">تعديل</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-right">
          <DialogTitle>تعديل سعر</DialogTitle>
        </DialogHeader>
        <section>
          <Formik
            initialValues={{
              title: price.title,
              price: price.price,
            }}
            validationSchema={PriceSchema.create}
            onSubmit={(values: UpdatePriceFormValues) => {
              updateMutation.mutate(values)
            }}
          >
            {({ errors }) => (
              <Form className="space-y-4">
                <InputField name="title" label="الوصف" error={errors.title} isTextarea />
                <InputField name="price" label="السعر" error={errors.price} type="number" />
                <Button loading={updateMutation.isPending} className="w-full justify-center bg-blue-600 hover:bg-blue-600/90" icon={Plus}>
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
