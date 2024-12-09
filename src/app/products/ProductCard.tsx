import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const ProductCard = () => {
  return (
    <div>
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
    </div>
  )
}
export default ProductCard