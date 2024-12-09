"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"

import { createProduct, updateProduct } from "../products.api";

import { useParams, useRouter } from "next/navigation"



export  const ProductForm = ({product}:any) => {
    const {register,handleSubmit}= useForm({
      defaultValues: {
        name: product?.name,
        price: product?.price,
        description: product?.description,
        image: product?.image
      }
    })
    const router = useRouter();
    const params = useParams<{id: string}>();
    const onsubmit = handleSubmit(async data => {
      if (params?.id) {
        await updateProduct(params.id, {
          ...data,
          price: parseFloat(data.price),
        });
      }else{
        await createProduct({
          ...data,
          price: parseFloat(data.price),
        });
      }
      await createProduct(data)
      router.push('/')
      router.refresh()
    })
  return (
    <div>
      <form onSubmit={onsubmit}>
    <Label>Procut Name</Label>
    <Input
      {...register("name")}
    />
    <Label>Price</Label>
    <Input
      {...register("price")}
    />
    <Label>Description</Label>
    <Input
      {...register("description")}
    />
    <Label>Image</Label>
    <Input
      {...register("image")}
    />
    <Button>{params.id ? 'Update Product': 'Create Product'}</Button>
  </form></div>
  )
}
