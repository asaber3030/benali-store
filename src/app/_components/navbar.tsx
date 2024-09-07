import Image from "next/image"
import { Logo } from "./logo"

export const Navbar = () => {
  return (
    <div className="bg-[#222] flex justify-between xl:px-16 px-4 py-2 items-center">
      <div className="xl:flex md:flex gap-1 hidden">
        <img src="/defaults/brands/payments.webp" alt="Phone" className="max-w-full" />
      </div>

      <Logo />

      <div className="flex gap-3 items-center justify-start">
        <div className="">
          <p className="text-left">تواصل معنا</p>
          <a href={""} className="font-bold text-green-600">
            <bdi>010 2968 6857</bdi>
          </a>
        </div>
        <Image src="/defaults/phone.svg" alt="Phone" width={40} height={40} />
      </div>
    </div>
  )
}
