import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProduct } from "../products.api"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"


interface Props { 
    params: {id: string}
}
export const  ProductDetailPage = async ({params}: Props) => {
    const product = await getProduct(params.id)
    console.log(product)
  return (
    <div className="flex justify-center items-center h-screen">
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between">
                    Product Detail: {product.id}
                    <Link className={buttonVariants()} href={'/'}>Go back</Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <img src={product.image} className="w-full h-64 object-cover"/>
            </CardContent>
        </Card>
    </div>
  )
}
export default ProductDetailPage