import Image from "next/image"
import { Logo } from "./logo"

export const Navbar = () => {
  return (
    <div className="bg-[#222] px-16 py-4 flex flex-col xl:flex-row justify-center gap-4 xl:justify-between items-center">
      <div className="flex gap-1">
        <img src="/defaults/brands/payments.webp" alt="Phone" className="max-w-full" />
      </div>

      <div>
        <Logo />
      </div>

      <div className="flex gap-3 items-center justify-start">
        <div className="">
          <p className="text-left">Contact Us</p>
          <a href={""} className="font-bold text-green-600">
            <bdi>010 2968 6857</bdi>
          </a>
        </div>
        <Image src="/defaults/phone.svg" alt="Phone" width={40} height={40} />
      </div>
    </div>
  )
}
