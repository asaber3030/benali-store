"use client"

import { cn } from "@/lib/utils"
import { Loader, LucideIcon } from "lucide-react"

import React from "react"

type Props = {
  children: React.ReactNode
  icon?: LucideIcon
  className?: string
  type?: "submit" | "button" | "reset"
  loading?: boolean
  onClick?: (...args: any) => any
}

export const Button = ({ children, loading, type = "submit", onClick, icon: Icon, className }: Props) => {
  return (
    <button type={type} onClick={onClick} disabled={loading} className={cn("bg-blue-500 items-center transition-all text-white hover:bg-blue-500/90 rounded-md p-2 px-4 flex gap-2", className)}>
      {loading ? <Loader className="size-4 animate-spin" /> : <>{Icon && <Icon className="size-4" />}</>}
      {children}
    </button>
  )
}
