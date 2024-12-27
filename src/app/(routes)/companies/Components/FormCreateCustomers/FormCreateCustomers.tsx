"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormCreateCustomProps } from "./FormCreateCustomers.types";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1),
  country: z.string().min(2),
  website: z.string().min(2),
  phone: z.string().min(10),
  cif: z.string().min(6),
  profileImage: z.string(),
});
export const FormCreateCustomers = (props: FormCreateCustomProps) => {
  const { setOpenModalCreate } = props;
  const [photoUploaded, setPhotoUploaded] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      website: "",
      phone: "",
      cif: "",
      profileImage: "",
    },
  });

  const {isValid} = form.formState

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <h1>Create Customer</h1>
      {/*<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          //control={form.control}
          //name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>*/}
    </Form>
  );
};
export default FormCreateCustomers;
