import { Button } from "@/app/components/common/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DollarSign } from "lucide-react"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

import { responseCodes } from "@/lib/response"
import { toast } from "sonner"
import { createPriceAction } from "@/actions/products"

import { Form, Formik } from "formik"
import { InputField } from "@/app/components/common/input"
import { Plus } from "lucide-react"

import { CreatePriceFormValues } from "@/types"
import { PriceSchema } from "@/schema"

type Props = { productId: number }

export const CreatePriceModal = ({ productId }: Props) => {
  const [open, setOpen] = useState(false)

  const createMutation = useMutation({
    mutationFn: (values: CreatePriceFormValues) => createPriceAction(productId, values),
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
        <Button className="border border-green-700 text-green-700 hover:bg-green-100 bg-transparent px-4 text-sm h-8" icon={DollarSign}>
          خدمة فرعية جديده
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-right">
          <DialogTitle>اضافة خدمه فرعية</DialogTitle>
        </DialogHeader>
        <section>
          <Formik
            initialValues={{
              title: "",
              price: 0,
            }}
            validationSchema={PriceSchema.create}
            onSubmit={(values: CreatePriceFormValues) => {
              createMutation.mutate(values)
            }}
          >
            {({ errors }) => (
              <Form className="space-y-4">
                <InputField name="title" label="الوصف" error={errors.title} isTextarea />
                <InputField name="price" label="السعر" error={errors.price} type="number" />
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
