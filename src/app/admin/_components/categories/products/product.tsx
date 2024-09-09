"use client"

import Image from "next/image"

import { UpdateProductModal } from "./update-product-modal"
import { DeleteProductModal } from "./delete-product-model"
import { FullProduct } from "@/types"
import { CreatePriceForm } from "./create-price-form"
import { ViewPricesModal } from "./view-prices-modal"

type Props = {
  product: FullProduct
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
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-1 p-4 py-2 pb-4">
        <UpdateProductModal product={product} />
        <DeleteProductModal productId={product.id} />
        <ViewPricesModal prices={product.prices} />
        <CreatePriceForm productId={product.id} />
      </div>
    </div>
  )
}
