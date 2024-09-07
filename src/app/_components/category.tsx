import Image from "next/image"

import { Category, Product } from "@prisma/client"
import { SingleProduct } from "./product"
import { Hash } from "lucide-react"

type Props = {
  category: Category & { products: Product[] }
}

export const SingleCategory = ({ category }: Props) => {
  return (
    <div className="p-3 rounded-md" id={`single-category-${category.id}`}>
      <h2 className="text-2xl font-bold mb-2 flex gap-2 items-center animate-pulse">
        <Hash className="size-5" /> {category.name}
      </h2>

      <div className="divide-y">
        {category.products.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 gap-4">
            {category.products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center flex flex-col justify-center mx-auto bg-[#222] shadow-sm border border-[#333] p-8 rounded-md">
            <Image src="/defaults/empty.svg" alt="Empty Data" width={1000} height={1000} className="mx-auto size-36 max-w-full" />
            <p className="font-semibold text-2xl">لا يوجد منتجات!</p>
          </div>
        )}
      </div>
    </div>
  )
}
