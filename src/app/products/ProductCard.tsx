"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { deleteProduct } from "./products.api";
import { useRouter } from "next/navigation";

export const ProductCard = ({ product }: any) => {
  const router = useRouter();
  async function handleRemoveProduct(id: string) {
    await deleteProduct(id);
    router.refresh();
  }
  return (
    <Card
    onClick={() => {
      router.push(`/products/${product.id}`);
    }}
  >
    <CardHeader>
      <CardTitle className="flex justify-between">
        {product.name}
        <span className="text-sm font-bold text-gray-500">
          ${product.price}
        </span>
      </CardTitle>
    </CardHeader>
    <img src={product.image} alt="" />
    <CardContent>
      <p>{product.description}</p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button
        className="mt-5"
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/products/${product.id}/edit`);
        }}
      >
        Editar
      </Button>
      <Button
        className="mt-5"
        variant="destructive"
        onClick={(e) => {
          e.stopPropagation();
          handleRemoveProduct(product.id);
        }}
      >
        Eliminar
      </Button>
    </CardFooter>
  </Card>
);
}
export default ProductCard;
