import db from "@/services/prisma"

import { SingleCategory } from "../_components/category"
import { CategoriesList } from "../_components/categories-list"

export default async function Home() {
  const categories = await db.category.findMany({
    include: { products: true },
  })

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2 xl:px-16 md:px-16 px-8">الاقسام</h2>
      <CategoriesList categories={categories} />
      <div className="space-y-4 xl:px-16 md:px-16 px-8 mt-4">
        {categories.map((category) => (
          <SingleCategory key={`category-${category.id}`} category={category} />
        ))}
      </div>
    </div>
  )
}
