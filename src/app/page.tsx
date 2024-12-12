import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/products.api";
import ProductCard from "./products/ProductCard";

export const dynamic = "force-dynamic";
export default async function Home() {
  const products = await getProducts();
  console.log(products);
  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-3xl font-bold">NextNestApp</h1>
        <Link href={"/products/new"} className={buttonVariants()}>
          Create product
        </Link>
      </div>
      <div className="grid xl:grid-cols-4 grid-cols-2 gap-3">
        {products.map((product:any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
