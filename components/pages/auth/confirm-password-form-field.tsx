"use client"

import { type UseFormReturn, type Path } from "react-hook-form"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/password-input"

type WithConfirmPassword = { confirmPassword: string }

export function ConfirmPasswordFormField<T extends WithConfirmPassword>({ form }: { form: UseFormReturn<T> }) {
  return (
    <FormField
      control={form.control}
      name={"confirmPassword" as Path<T>}
      render={({ field }) => (
        <FormItem className="grid gap-2">
          <div className="flex justify-between items-center">
            <FormLabel htmlFor="confirmPassword">تکرار رمزعبور</FormLabel>
          </div>
          <FormControl>
            <PasswordInput
              className="text-left"
              id="confirmPassword"
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