"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { Button } from "@/app/components/common/button"
import { Eye } from "lucide-react"

import { AdminProductPriceItem } from "./price-item"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ProductPrice } from "@prisma/client"

type Props = { prices: ProductPrice[] }

export const ViewPricesModal = ({ prices }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border border-black-500 text-black-500 border-black hover:bg-black/10 h-8 bg-transparent w-full" icon={Eye}>
          الخدمات الفرعيه
        </Button>
      </DialogTrigger>
      <DialogContent className="xl:min-w-[75%]">
        <DialogHeader>
          <DialogTitle>اسعار الخدمات الفرعية</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-72">
          {prices?.length > 0 ? (
            <div className="space-y-2">
              {prices?.map((price) => (
                <AdminProductPriceItem key={price.id} price={price} />
              ))}
            </div>
          ) : (
            <div className="text-center font-semibold border rounded-md py-2">لا يوجد اسعار تم اضافتها.</div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
