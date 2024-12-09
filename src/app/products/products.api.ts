export const BACKEND_URL = process.env.BACKEND_URL
export async function getProducts() {
    const res = await fetch(`${BACKEND_URL}/api/products`,{
        cache: "no-store",
    })
    const data = await res.json()
    return data
}

export async function getProduct(id:string) {
    const res = await fetch(`${BACKEND_URL}/api/products/${id}`)
    const data = await res.json()
    return data
}

export async function createProduct(productData: any) { 
    const res = await fetch('${BACKEND_URL}/api/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            
        },
        body: JSON.stringify(productData),
})
    const data = await res.json()
    console.log(data)    
}   

export async function updateProduct(id:string, newProduct: any) { 
    const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newProduct),
        cache: "no-store",
    })
}
export async function deleteProduct(id: number) { 
    const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
        method: 'DELETE',
})
    const data = await res.json()
    return data  
}