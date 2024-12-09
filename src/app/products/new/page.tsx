
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductForm } from "./ProductForm"

const ProductsNewPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Create Product</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm/>
        </CardContent>
      </Card>
    </div>
  )
}
export default ProductsNewPage