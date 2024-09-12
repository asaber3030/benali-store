import {
  Category as CategoryType,
  Product,
  ProductPrice,
} from "@prisma/client";

export default function Category({
  name,
  id,
  products,
}: CategoryType & { products: (Product & { prices: ProductPrice[] })[] }) {
  return (
    <div className="border-b-2 border-slate-400 dark:border-slate-300 last:border-0">
      <section className="section py-8">
        <h2 id={id.toString()} className="text-center mb-8">
          {name}
        </h2>
        <ul className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {products.map(
            ({ image, name, description, price, prices }, index) => (
              <li
                key={index}
                className="rounded-xl border-b-2 border-slate-300 dark:border-slate-950 overflow-hidden h-max"
              >
                <img src={image} alt={name} />
                <div className="flex flex-col p-2 gap-2 bg-slate-100 dark:bg-slate-800">
                  <h3>{name}</h3>
                  <p className="whitespace-pre-line">{description}</p>
                  {price ? (
                    <p className="text-2xl">
                      <b>{price} ج.م.</b>
                    </p>
                  ) : (
                    <></>
                  )}
                  <ul className="list-inside list-disc">
                    {prices.map(({ title, price }, index) => (
                      <li key={index}>
                        {title} <b>{price} ج.م.</b>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}
