import React from "react"

import { CreateCategoryModal } from "../_components/categories/create-category-modal"
import { CreateProductModal } from "../_components/categories/products/create-product-modal"
import { AdminProvider } from "@/app/providers/admin"
import { AdminCard } from "../_components/admin-card"

import { getAdmin } from "@/actions/admin"
import { redirect } from "next/navigation"

import routes from "@/lib/routes"
import db from "@/services/prisma"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const admin = await getAdmin()
  if (!admin) return redirect(routes.adminLogin())

  const categories = await db.category.findMany()

  return (
    <AdminProvider admin={admin}>
      <div className="xl:p-20 md:p-16 p-8 grid xl:grid-cols-8 md:grid-cols-8 gap-4">
        <div className="xl:col-span-1 md:col-span-2 col-span-8 space-y-2">
          <AdminCard admin={admin} />
          <CreateProductModal categories={categories} />
          <CreateCategoryModal />
        </div>
        <div className="xl:col-span-7 md:col-span-6 col-span-8">{children}</div>
      </div>
    </AdminProvider>
  )
}
