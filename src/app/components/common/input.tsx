"use client"

import { ErrorMessage, Field } from "formik"
import { useId } from "react"

type Props = {
  name: string
  label: string
  type?: string
  placeholder?: string
  error?: string
}

export const InputField = ({ error, name, label, placeholder, type = "text" }: Props) => {
  const uuid = useId()
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={uuid}>{label}</label>
      <Field type={type} className="border p-2 px-4 focus:outline-none rounded-md hover:border-orange-200 focus:border-orange-200" id={uuid} name={name} placeholder={placeholder} />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
