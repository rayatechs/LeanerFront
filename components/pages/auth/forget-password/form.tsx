"use client"

import { formResolver, type FormValues } from "@/consts/schema/forget-password"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { LoginByGoogleButton } from "@/components/pages/auth/login-by-google-button"
import { FormHeader } from "@/components/pages/auth/form-header"
import { RegisterCTA } from "@/components/pages/auth/register-cta"
import { EmailFormField } from "@/components/pages/auth/email-form-field"
import { Separator } from "@/components/pages/auth/separator"

export function ForgetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = formResolver()

  async function onSubmit(values: FormValues) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
        <FormHeader 
          title="فراموشی رمزعبور"
          description="برای ارسال ایمیل بازیابی حساب کاربری خود، اطلاعات خود را در فرم زیر وارد کنید."  
        />

        <div className="grid gap-6">
          <EmailFormField form={form} />

          <Button type="submit" className="w-full cursor-pointer">
            ارسال
          </Button>

          <Separator />

          <LoginByGoogleButton />
        </div>

        <RegisterCTA />
      </form>
    </Form>
  )
}
