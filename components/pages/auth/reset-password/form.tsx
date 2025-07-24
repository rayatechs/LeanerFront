"use client"

import { formResolver, type FormValues } from "@/consts/schema/reset-password"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { LoginByGoogleButton } from "@/components/pages/auth/login-by-google-button"
import { FormHeader } from "@/components/pages/auth/form-header"
import { RegisterCTA } from "@/components/pages/auth/register-cta"
import { PasswordFormField } from "@/components/pages/auth/password-form-field"
import { ConfirmPasswordFormField } from "@/components/pages/auth/confirm-password-form-field"
import { Separator } from "@/components/pages/auth/separator"

export function ResetPasswordForm({
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
          title="بازنشانی حساب کاربری"
          description="برای تغییر رمزعبور حساب کاربری خود، اطلاعات خود را در فرم زیر وارد کنید."  
        />

        <div className="grid gap-6">
          <PasswordFormField form={form} />

          <ConfirmPasswordFormField form={form} />

          <Button type="submit" className="w-full cursor-pointer">
            تغییر رمزعبور
          </Button>

          <Separator />

          <LoginByGoogleButton />
        </div>

        <RegisterCTA />
      </form>
    </Form>
  )
}
