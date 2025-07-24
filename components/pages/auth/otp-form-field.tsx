"use client"

import { type UseFormReturn, type Path } from "react-hook-form"

import Link from "next/link"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

type WithOTP = { otp: string }

export function OTPFormField<T extends WithOTP>({ form }: { form: UseFormReturn<T> }) {
  return (
    <FormField
      control={form.control}
      name={"otp" as Path<T>}
      render={({ field }) => (
        <FormItem className="grid gap-3">
          <div className="flex justify-between items-center">
            <FormLabel htmlFor="otp">کد یکبار مصرف</FormLabel>
            <Link
              href="#"
              className="ml-auto rtl:mr-auto rtl:ml-0 text-sm underline-offset-4 hover:underline"
            >
              ارسال مجدد
            </Link>
          </div>
          <FormControl>
            <InputOTP containerClassName="justify-between" id="otp"  maxLength={6} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={4} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}