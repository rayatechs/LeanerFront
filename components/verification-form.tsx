"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import Link from "next/link"

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
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">تایید حساب کاربری</h1>
          <p className="text-muted-foreground text-sm">
            برای تایید حساب کاربری خود، کد یکبار مصرفی را که ارسال کردیم را در فرم زیر وارد کنید.
          </p>
        </div>


        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel htmlFor="otp">کد یکبار مصرف</FormLabel>
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

          <Button variant="outline" className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            ورود از طریق گوگل
          </Button>
        </div>

        <div className="text-center text-sm">
          حساب کاربری ندارید؟{" "}
          <Link href="#" className="underline underline-offset-4">
            ثبت نام
          </Link>
          {" "} کنید!
        </div>
      </form>
    </Form>
  )
}
