"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validation/form";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const CardDetails = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          {/* Card Number */}
          <div className="grid grid-cols-1 gap-3">
            <FormField
              control={form.control}
              name="cardnumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-sm rounded-md border-[1.5px] border-[#EFEFEF]"
                      placeholder="Card number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Expiry Date and Security Code  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="expiry"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-sm rounded-md border-[1.5px] border-[#EFEFEF]"
                      placeholder="Expiration date (MM / YY)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="security"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-sm rounded-md border-[1.5px] border-[#EFEFEF]"
                      placeholder="Security code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Name on Card  */}
          <div className="grid grid-cols-1 gap-3">
            <FormField
              control={form.control}
              name="nameoncard"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-sm rounded-md border-[1.5px] border-[#EFEFEF]"
                      placeholder="Name on card"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CardDetails
