"use client"

import Link from "next/link"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { LoginByGoogleButton } from "@/components/pages/auth/login-by-google-button"
import { FormHeader } from "@/components/pages/auth/form-header"
import { RegisterCTA } from "@/components/pages/auth/register-cta"

const verificationFormSchema = z.object({
  otp: z
    .string()
    .length(6, "کد باید ۶ رقمی باشد")
    .regex(/^\d+$/, "کد باید فقط شامل اعداد باشد"),
})
type verificationFormValues = z.infer<typeof verificationFormSchema>

export function VerificationForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = useForm<verificationFormValues>({
    resolver: zodResolver(verificationFormSchema),
    mode: "onChange",
    defaultValues: {
      otp: undefined
    },
  })

  async function onSubmit(values: verificationFormValues) {
    console.log(values)
    const res = await fetch('/api/verification');
    console.log(res);
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
        <FormHeader 
          title="تایید حساب کاربری"
          description="برای تایید حساب کاربری خود، کد یکبار مصرفی را که ارسال کردیم را در فرم زیر وارد کنید."  
        />

        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="otp"
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

          <Button type="submit" className="w-full cursor-pointer">
            تایید
          </Button>

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              یا ادامه با
            </span>
          </div>

          <LoginByGoogleButton />
        </div>

        <RegisterCTA />
      </form>
    </Form>
  )
}
