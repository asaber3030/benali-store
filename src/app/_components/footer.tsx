import Image from "next/image"

import { Mail, Phone } from "lucide-react"
import { Logo } from "./logo"

export const Footer = () => {
  return (
    <footer className="xl:px-16 md:px-16 px-8 bg-[#222] grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1 py-8 divide-y xl:divide-none divide-[#333]">
      <div className="py-4">
        <Logo className="w-fit mb-4" />
        <p className="text-lg text-gray-500">وصف عام</p>
      </div>
      <div className="py-4">
        <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
        <div className="flex gap-4">
          <a href="">
            <Image src="/defaults/brands/facebook.svg" alt="FB" width={30} height={30} />
          </a>
          <a href="">
            <Image src="/defaults/brands/instagram.svg" alt="FB" width={30} height={30} />
          </a>
          <a href="">
            <Image src="/defaults/brands/whatsapp.svg" alt="FB" width={30} height={30} />
          </a>
          <a href="">
            <Image src="/defaults/brands/telegram.svg" alt="FB" width={30} height={30} />
          </a>
        </div>
      </div>
      <div className="space-y-3 py-4">
        <h2 className="text-2xl font-bold mb-4">ابعت رسالة</h2>

        <div className="flex gap-4">
          <Phone className="text-green-500" />
          <div>
            <p className="font-semibold">رقم الهاتف</p>
            <p className="text-gray-400">
              <bdi>011 9999 2222</bdi>
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Mail className="text-green-500" />
          <div>
            <p className="font-semibold">البريد الالكتروني</p>
            <p className="text-gray-400">
              <bdi>a@a.xyz</bdi>
            </p>
          </div>
        </div>
      </div>

      <div className=" py-4">
        <h2 className="text-2xl font-bold mb-4">أساليب الدفع</h2>
        <img src="/defaults/brands/payments.webp" alt="Phone" className="max-w-full" />
      </div>
    </footer>
  )
}
