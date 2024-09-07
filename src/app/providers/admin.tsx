"use client"

import { Admin } from "@prisma/client"
import { createContext } from "react"

export const AdminContext = createContext<Admin | undefined>(undefined)

export const AdminProvider = ({ admin, children }: { admin: Admin | undefined; children: React.ReactNode }) => {
  return <AdminContext.Provider value={admin}>{children}</AdminContext.Provider>
}
