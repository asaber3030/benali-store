import { Category } from "@prisma/client"

import Link from "next/link"

type Props = { categories: Category[] }

export const CategoriesList = ({ categories }: Props) => {
  return (
    <div className="flex flex-col md:flex-row xl:flex-row bg-[#222] w-full my-4 xl:px-16 py-2">
      {categories.map((category) => (
        <Link href={`#single-category-${category.id}`} key={category.id} className="p-2 px-4 font-semibold hover:bg-orange-400 rounded-md transition-all">
          {category.name}
        </Link>
      ))}
    </div>
  )
}
