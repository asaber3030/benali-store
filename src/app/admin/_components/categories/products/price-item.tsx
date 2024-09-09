import { ProductPrice } from "@prisma/client"
import { UpdatePriceModal } from "./update-price-modal"
import { DeletePriceModal } from "./delete-price-modal"

type Props = {
  price: ProductPrice
}

export const AdminProductPriceItem = ({ price }: Props) => {
  return (
    <div className="flex justify-between flex-row-reverse border p-2 rounded-md px-4">
      <div className="flex gap-2 flex-row-reverse line-clamp-1">
        <p className="line-clamp-2">{price.title}</p> - <bdi className="text-green-600 font-semibold line-clamp-2">{price.price} جنيه مصري</bdi>
      </div>
      <div className="flex gap-2">
        <UpdatePriceModal price={price} />
        <DeletePriceModal priceId={price.id} />
      </div>
    </div>
  )
}
