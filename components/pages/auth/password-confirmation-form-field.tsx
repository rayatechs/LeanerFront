"use client"

import { type UseFormReturn, type Path } from "react-hook-form"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/password-input"

type WithPasswordConfirmation = { password_confirmation: string }

export function PasswordConfirmationFormField<T extends WithPasswordConfirmation>({ form }: { form: UseFormReturn<T> }) {
  return (
    <FormField
      control={form.control}
      name={"password_confirmation" as Path<T>}
      render={({ field }) => (
        <FormItem className="grid gap-2">
          <div className="flex justify-between items-center">
            <FormLabel htmlFor="password_confirmation">تکرار رمزعبور</FormLabel>
          </div>
          <FormControl>
            <PasswordInput
              className="text-left"
              id="password_confirmation"
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