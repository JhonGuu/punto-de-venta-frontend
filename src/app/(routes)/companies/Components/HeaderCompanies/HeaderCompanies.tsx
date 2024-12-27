"use client"

import { Button } from "@/components"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { CirclePlus } from "lucide-react"
import { useState } from "react"
import { FormCreateCustomers } from "../FormCreateCustomers"
export const HeaderCompanies = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false)
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl">List of companies</h2>
      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button>Create Company</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create Customer</DialogTitle>
            <DialogDescription>
              Create and configure your customer.
            </DialogDescription>
          </DialogHeader>
          
          <FormCreateCustomers/>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default HeaderCompanies