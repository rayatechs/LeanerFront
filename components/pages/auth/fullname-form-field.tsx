"use client"

import { type UseFormReturn, type Path } from "react-hook-form"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type WithFullname = { full_name: string }

export function FullnameFormField<T extends WithFullname>({ form }: { form: UseFormReturn<T> }) {
  return (
    <FormField
      control={form.control}
      name={"full_name" as Path<T>}
      render={({ field }) => (
        <FormItem className="grid gap-3">
          <FormLabel htmlFor="full_name">نام و نام‌خانوادگی</FormLabel>
          <FormControl>
            <Input
              className="text-right"
              id="full_name"
              placeholder="علی علوی"
              type="text"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}