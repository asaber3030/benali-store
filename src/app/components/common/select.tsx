"use client"

import { ErrorMessage, Field } from "formik"
import { useId } from "react"

type Props = {
  name: string
  label: string
  children: React.ReactNode
  placeholder?: string
  error?: string
}

export const SelectField = ({ error, name, label, children }: Props) => {
  const uuid = useId()
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={uuid}>{label}</label>
      <Field as="select" name={name} className="border p-2 px-4 focus:outline-none rounded-md hover:border-orange-200 focus:border-orange-200">
        {children}
      </Field>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
