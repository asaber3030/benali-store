"use client"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

import { deletePriceAction } from "@/actions/products"
import { responseCodes } from "@/lib/response"
import { toast } from "sonner"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/app/components/common/button"
import { Trash } from "lucide-react"

type Props = { priceId: number }

export const DeletePriceModal = ({ priceId }: Props) => {
  const [open, setOpen] = useState(false)
  const deleteMutation = useMutation({
    mutationFn: () => deletePriceAction(priceId),
    onSuccess: (data) => {
      if (data.status === responseCodes.ok) {
        toast.success(data.message)
        setOpen(false)
      } else {
        toast.error(data.message)
      }
    },
    onError: (data) => {
      toast.error(data.message)
    },
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-7 bg-transparent px-0 text-gray-500 hover:bg-transparent hover:underline">حذف</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>حذف المنتج</DialogTitle>
          <DialogDescription>هل انت متأكد من انك تريد حذف السعر بشكل نهائي؟ لا يمكنك استعادته مره اخرى بعد حذفه</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row gap-2">
          <DialogClose asChild className="w-fit">
            <Button className="bg-transparent text-black border hover:bg-gray-50 text-sm h-8" icon={Trash}>
              اغلاق
            </Button>
          </DialogClose>
          <Button onClick={deleteMutation.mutate} loading={deleteMutation.isPending} className="w-fit bg-red-500 hover:bg-red-500/90 px-4 text-sm h-8" icon={Trash}>
            تأكيد
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
