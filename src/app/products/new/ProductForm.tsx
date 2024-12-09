"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"

import { createProduct } from "../products.api";

import { useRouter } from "next/navigation"



export  const ProductForm = () => {
    const {register,handleSubmit}= useForm()
    const router = useRouter()
    const onsubmit = handleSubmit(async data => {
      console.log(data)
      await createProduct({
        ...data,
        price: parseFloat(data.price),
      });
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
    <Button>Create Product</Button>
  </form></div>
  )
}
