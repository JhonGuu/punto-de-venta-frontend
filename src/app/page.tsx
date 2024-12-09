import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/products.api";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
      <div className="grid grid-cols-4 gap-3">
        {products.map((product) => (
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                {product.name}
                <span className="text-sm font-semibold text-gray-500">
                  ${product.price}
                </span>
              </CardTitle>
            </CardHeader>
            <img src={product.image} alt={product.name} width={200} height={200}/>
            <CardContent>
              <p>{product.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
            <Button className="mt-5">Comprar</Button>
            <Button className="mt-5" variant={"destructive"}>Eliminar</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
