import React from "react"

import "./user.css"

import { Navbar } from "../_components/navbar"
import { Footer } from "../_components/footer"
import { CategoriesList } from "../_components/categories-list"

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
