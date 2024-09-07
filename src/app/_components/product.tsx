"use client"

import Image from "next/image"

import { Product } from "@prisma/client"

type Props = {
  product: Product
}

export const SingleProduct = ({ product }: Props) => {
  return (
    <div className="border border-[#222] rounded-md shadow-sm h-fit">
      <Image src={product.image} alt="Product image" width={200} height={200} className="h-44 object-cover rounded-md max-w-full w-full" />
      <div className="px-4 py-4 flex flex-col gap-1">
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-green-600 font-bold">{product.price} جنية مصري</p>
      </div>
    </div>
  )
}
