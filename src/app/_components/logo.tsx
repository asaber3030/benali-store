import { cn } from "@/lib/utils"
import { ClassValue } from "class-variance-authority/types"

import Link from "next/link"

export const Logo = ({ className }: { className?: ClassValue }) => {
  return (
    <Link href="/" className={cn("flex gap-1 flex-row-reverse text-3xl bg-w font-semibold hover:opacity-80 transition-all select-none", className)}>
      <p className="bg-blue-400 text-black px-2">BEN</p>
      <p className="text-white">ALI</p>
    </Link>
  )
}
