import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/products.api";
import ProductCard from "./products/ProductCard";
import { ProductData } from "./products/products.data";
import { CardSummary } from "./components";
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";
import { dataCardSummary } from "../data/CardSummary.data";
import { LastCustomers } from "./components/LastCustomers";
import { SalesDistributor } from "./components/SalesDistributor";
import { TotalSuscribers } from "./components/TotalSuscribers";
import { ListIntegrations } from "./components/ListIntegrations";

export const dynamic = "force-dynamic";
export default async function Home() {
  const products = await getProducts();
  console.log(products);
  return (
    <>
      <h2 className="text-2xl mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardSummary.map(({average, icon:Icon, title, total, tooltipText}) => (
          <CardSummary
            key={title}
            icon={Icon}
            total={total}
            average={average} 
            title={title}
            tooltipText={tooltipText}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 xl:mt-4">
        <LastCustomers/>
        <SalesDistributor/>   
      </div>

      <div className="flex-col xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center md:gap-x-10">
        <TotalSuscribers/>
        <ListIntegrations/>
      </div>

      {/*<div className="flex flex-col items-center mt-4">
        <h1 className="text-3xl font-bold">NextNestApp</h1>
        <Link href={"/products/new"} className={buttonVariants()}>
          Create product
        </Link>
      </div>
      <div className="grid xl:grid-cols-4 grid-cols-2 gap-3">
        {products.map((product:ProductData) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>*/}
    </>
  );
}
