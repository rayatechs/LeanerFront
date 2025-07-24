"use client"

import { type UseFormReturn, type Path } from "react-hook-form"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/password-input"

type WithPasswordConfirmation = { passwordConfirmation: string }

export function PasswordConfirmationFormField<T extends WithPasswordConfirmation>({ form }: { form: UseFormReturn<T> }) {
  return (
    <FormField
      control={form.control}
      name={"passwordConfirmation" as Path<T>}
      render={({ field }) => (
        <FormItem className="grid gap-2">
          <div className="flex justify-between items-center">
            <FormLabel htmlFor="passwordConfirmation">تکرار رمزعبور</FormLabel>
          </div>
          <FormControl>
            <PasswordInput
              className="text-left"
              id="passwordConfirmation"
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