import db from "@/services/prisma";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Category from "@/components/Category";
import Footer from "@/components/Footer";

export default async function Home() {
  const categories = await db.category.findMany({
    include: {
      products: {
        include: { prices: true },
      },
    },
  });

  return (
    <>
      <Header />
      <Nav categories={categories} />
      <main>
        {categories.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </main>
      <Footer />
    </>
  );
}
