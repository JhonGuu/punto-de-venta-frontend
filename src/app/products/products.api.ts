export async function getProducts() {
    const res = await fetch('http://localhost:4000/api/products',{
        cache: "no-store",
    })
    const data = await res.json()
    return data
}

export async function createProduct(productData: any) { 
    const res = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            
        },
        body: JSON.stringify(productData),
})
    const data = await res.json()
    console.log(data)    
}   