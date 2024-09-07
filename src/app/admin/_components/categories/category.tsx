import Image from "next/image"

import { Category, Product } from "@prisma/client"
import { SingleProduct } from "./products/product"
import { UpdateCategoryModal } from "./update-category-modal"
import { DeleteCategoryModal } from "./delete-category-model"

type Props = {
  category: Category & { products: Product[] }
}

export const CategoryItem = ({ category }: Props) => {
  return (
    <div className="p-3 rounded-md">
      <section className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
        <div className="flex gap-2">
          <UpdateCategoryModal category={category} />
          <DeleteCategoryModal categoryId={category.id} />
        </div>
      </section>

      <div className="divide-y">
        {category.products.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 gap-4">
            {category.products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center flex flex-col justify-center mx-auto bg-gray-100 shadow-sm border p-8 rounded-md">
            <Image src="/defaults/empty.svg" alt="Empty Data" width={1000} height={1000} className="mx-auto size-36 max-w-full" />
            <p className="font-semibold text-2xl">لا يوجد منتجات!</p>
          </div>
        )}
      </div>
    </div>
  )
}
