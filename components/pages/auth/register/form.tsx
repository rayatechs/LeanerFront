"use client"

import { useRouter } from "next/navigation"

import { formResolver, type FormRequest } from "@/consts/schema/auth/register"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { EmailFormField } from "@/components/pages/auth/email-form-field"
import { FormHeader } from "@/components/pages/auth/form-header"
import { FullnameFormField } from "@/components/pages/auth/fullname-form-field"
import { LoginByGoogleButton } from "@/components/pages/auth/login-by-google-button"
import { LoginCTA } from "@/components/pages/auth/login-cta"
import { PasswordConfirmationFormField } from "@/components/pages/auth/password-confirmation-form-field"
import { PasswordFormField } from "@/components/pages/auth/password-form-field"
import { Separator } from "@/components/pages/auth/separator"
import { useAuthRegister } from "@/api/auth/auth"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter()
  const form = formResolver()

  const { mutateAsync, isPending } = useAuthRegister()

  async function onSubmit(request: FormRequest) {
    mutateAsync({ data: request }).then(() => {     
      router.push(`/verification?email=${request.email}`)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
        <FormHeader
          title="ساخت حساب کاربری"
          description="برای ساخت حساب کاربری خود، اطلاعات خود را در فرم زیر وارد کنید."
        />

        <div className="grid gap-6">
          <FullnameFormField form={form} />

          <EmailFormField form={form} />

          <PasswordFormField form={form} />

          <PasswordConfirmationFormField form={form} />

          <Button type="submit" className="w-full cursor-pointer" loading={isPending}>
            ثبت نام
          </Button>

          <Separator />

          <LoginByGoogleButton />
        </div>

        <LoginCTA />
      </form>
    </Form>
  )
}
