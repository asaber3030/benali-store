"use client"

import { useMutation } from "@tanstack/react-query"

import { updateProductAction } from "@/actions/products"
import { responseCodes } from "@/lib/response"
import { toast } from "sonner"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Form, Formik } from "formik"
import { InputField } from "@/app/components/common/input"
import { Button } from "@/app/components/common/button"
import { Edit } from "lucide-react"

import { FullProduct, UpdateProductFormValues } from "@/types"
import { ProductSchema } from "@/schema"
import { AdminProductPriceItem } from "./price-item"
import { ScrollArea } from "@/components/ui/scroll-area"

type Props = { product: FullProduct }

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
        <Button className="border border-blue-500 text-blue-500 hover:bg-blue-100 h-8 bg-transparent w-full" icon={Edit}>
          تعديل
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>تعديل المنتج</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="details">
          <TabsList className="flex justify-end">
            <TabsTrigger value="details">تعديل المنتج</TabsTrigger>
            <TabsTrigger value="prices">تعديل اسعار المنتج</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <section>
              <h2 className="font-bold text-2xl text-center mb-2">تعديل بيانات المنتج</h2>
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
                {({ errors }) => {
                  return (
                    <Form className="space-y-4">
                      <InputField name="name" label="اسم المنتج" error={errors.name} />
                      <InputField isTextarea name="description" label="وصف المنتج" error={errors.description} />
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
          </TabsContent>
          <TabsContent value="prices">
            <h2 className="font-bold text-2xl text-center mb-2">اسعار المنتج</h2>
            <ScrollArea className="h-72">
              {product.prices?.length > 0 ? (
                <div className="space-y-2">
                  {product.prices?.map((price) => (
                    <AdminProductPriceItem key={price.id} price={price} />
                  ))}
                </div>
              ) : (
                <div>لا يوجد اسعار تم اضافتها.</div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
