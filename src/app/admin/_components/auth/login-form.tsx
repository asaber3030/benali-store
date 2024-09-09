"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { AdminLoginFormValues } from "@/types"
import { Form, Formik } from "formik"
import { AdminSchema } from "@/schema"
import { InputField } from "@/app/components/common/input"
import { Button } from "@/app/components/common/button"
import { LogIn } from "lucide-react"

import { loginAdminAction } from "@/actions/admin"
import { responseCodes } from "@/lib/response"
import { toast } from "sonner"

export const LoginAdminForm = () => {
  const router = useRouter()
  const loginMutation = useMutation({
    mutationFn: (values: AdminLoginFormValues) => loginAdminAction(values),
    onSuccess: (data) => {
      if (data.status === responseCodes.ok) {
        toast.success(data.message)
        router.push(`/admin`)
        return
      }
      toast.error(data.message)
    },
    onError: (data) => {
      toast.error(data.message)
    },
  })

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={AdminSchema.login}
      onSubmit={(values: AdminLoginFormValues) => {
        loginMutation.mutate(values)
      }}
    >
      {({ errors }) => (
        <Form className="space-y-4">
          <InputField name="email" label="البريدد الالكتروني" error={errors.email} />
          <InputField type="password" name="password" label="الرقم السري" error={errors.password} />
          <Button loading={loginMutation.isPending} className="w-full justify-center" icon={LogIn}>
            تسجيل الدخول
          </Button>
        </Form>
      )}
    </Formik>
  )
}
