"use client"


import { formResolver, type FormValues } from "@/consts/schema/login"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { LoginByGoogleButton } from "@/components/pages/auth/login-by-google-button"
import { FormHeader } from "@/components/pages/auth/form-header"
import { RegisterCTA } from "@/components/pages/auth/register-cta"
import { EmailFormField } from "@/components/pages/auth/email-form-field"
import { PasswordFormField } from "@/components/pages/auth/password-form-field"

export function LoginForm({
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
          title="ورود به حساب کاربری"
          description="برای ورود به حساب کاربری خود، اطلاعات خود را در فرم زیر وارد کنید."  
        />

        <div className="grid gap-6">
          <EmailFormField form={form} />

          <PasswordFormField form={form} />

          <Button type="submit" className="w-full cursor-pointer">
            ورود
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
