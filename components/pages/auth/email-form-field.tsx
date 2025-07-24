"use client"

import { type UseFormReturn, type Path } from "react-hook-form"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type WithEmail = { email: string }

export function EmailFormField<T extends WithEmail>({ form }: { form: UseFormReturn<T> }) {
  return (
    <FormField
      control={form.control}
      name={"email" as Path<T>}
      render={({ field }) => (
        <FormItem className="grid gap-3">
          <FormLabel htmlFor="email">پست الکترونیک</FormLabel>
          <FormControl>
            <Input
              className="text-left"
              id="email"
              placeholder="johndoe@mail.com"
              type="email"
              autoComplete="email"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}