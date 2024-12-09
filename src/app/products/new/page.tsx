
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductForm } from "./ProductForm"
import { getProduct } from "../products.api"

interface Props { 
  params: {id: string}
}
const ProductsNewPage = async ({params}:Props) => {
  const product = await getProduct(params.id);
  return (
    <div className="h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>{params.id ? "Edit Product" : "New Product"}</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm product={product}/>
        </CardContent>
      </Card>
    </div>
  )
}
export default ProductsNewPage