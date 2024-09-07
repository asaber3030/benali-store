import { Category } from "@prisma/client"
import Link from "next/link"

type Props = { categories: Category[] }

export const CategoriesList = ({ categories }: Props) => {
  return (
    <div className="flex bg-[#222] px-16 py-2">
      {categories.map((category) => (
        <Link href="" key={category.id} className="p-2 px-4 font-semibold hover:bg-orange-400 rounded-md transition-all">
          {category.name}
        </Link>
      ))}
    </div>
  )
}
