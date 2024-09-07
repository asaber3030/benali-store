import { Admin } from "@prisma/client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import routes from "@/lib/routes"

export function AdminCard({ admin }: { admin: Admin }) {
  return (
    <Link className="border shadow-sm p-4 rounded-md flex items-center gap-4 transition-all hover:border-orange-200" href={routes.adminDashboard()}>
      <Image src="/images/user-svg.svg" alt="User" width={40} height={40} />
      <div>
        <p className="text-sm font-bold">{admin.name}</p>
        <p className="text-xs text-gray-500">{admin.email}</p>
      </div>
    </Link>
  )
}
