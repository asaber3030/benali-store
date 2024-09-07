import db from "@/services/prisma"
import React from "react"

import { CategoryItem } from "../_components/categories/category"

export default async function AdminPage() {
  const categories = await db.category.findMany({
    include: { products: true },
  })

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}
