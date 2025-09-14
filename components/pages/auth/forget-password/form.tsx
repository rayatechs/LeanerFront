"use client"

import { formResolver, type FormRequest } from "@/consts/schema/auth/forget-password"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { LoginByGoogleButton } from "@/components/pages/auth/login-by-google-button"
import { FormHeader } from "@/components/pages/auth/form-header"
import { RegisterCTA } from "@/components/pages/auth/register-cta"
import { EmailFormField } from "@/components/pages/auth/email-form-field"
import { Separator } from "@/components/pages/auth/separator"
import { useAuthForgetPassword } from "@/api/auth/query"
import { useState } from "react"
import Link from "next/link"

export function ForgetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [isActive, setIsActive] = useState(false);
  const form = formResolver()

  const { mutateAsync, isPending } = useAuthForgetPassword()

  async function onSubmit(request: FormRequest) {
    mutateAsync({ data: request }).then(() => {     
      setIsActive(true)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
        <FormHeader 
          title="فراموشی رمزعبور"
          description="برای ارسال ایمیل بازیابی حساب کاربری خود، اطلاعات خود را در فرم زیر وارد کنید."  
        />

        <div className="grid gap-6">

          {
            isActive ? (
              <div className="flex flex-col items-center gap-2 text-center border border-dashed rounded p-4">
                <p className="text-sm">لطفا ایمیل خود را وارد کنید تا لینک بازیابی برای شما ارسال شود.</p>
                <Link href="/login" className="text-primary hover:underline">
                  بازگشت به صفحه ورود
                </Link>
              </div>
            ) : (
              <>
                <EmailFormField form={form} />

                <Button type="submit" className="w-full cursor-pointer" loading={isPending}>
                  ارسال
                </Button>
              </>
            )
          }
          

          <Separator />

          <LoginByGoogleButton />
        </div>

        <RegisterCTA />
      </form>
    </Form>
  )
}
