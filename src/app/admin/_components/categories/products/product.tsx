"use client"

import Image from "next/image"

import { UpdateProductModal } from "./update-product-modal"
import { Button } from "@/app/components/common/button"
import { Product } from "@prisma/client"
import { Trash } from "lucide-react"
import { DeleteProductModal } from "./delete-product-model"

type Props = {
  product: Product
}

export const SingleProduct = ({ product }: Props) => {
  return (
    <div className="border rounded-md shadow-sm h-fit">
      <Image src={product.image} alt="Product image" width={400} height={400} className="rounded-md max-w-full" />
      <div className="px-4 py-2 flex flex-col gap-1">
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-green-600 font-bold">{product.price} جنية مصري</p>
      </div>
      <div className="flex gap-1 p-4 py-2 pb-4">
        <UpdateProductModal product={product} />
        <DeleteProductModal productId={product.id} />
      </div>
    </div>
  )
}
