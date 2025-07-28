"use client"

import { type UseFormReturn, type Path } from "react-hook-form"

import Link from "next/link"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/password-input"

type WithPassword = { password: string }

export function PasswordFormField<T extends WithPassword>({ form }: { form: UseFormReturn<T> }) {
  return (
    <FormField
      control={form.control}
      name={"password" as Path<T>}
      render={({ field }) => (
        <FormItem className="grid gap-2">
          <div className="flex justify-between items-center">
            <FormLabel htmlFor="password">رمزعبور</FormLabel>
            <Link
              href="/forget-password"
              className="ml-auto rtl:mr-auto rtl:ml-0 text-sm underline-offset-4 hover:underline"
            >
              فراموش کردی؟
            </Link>
          </div>
          <FormControl>
            <PasswordInput
              className="text-left"
              id="password"
              placeholder="******"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}