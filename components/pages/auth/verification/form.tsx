"use client"

import { useRouter } from "next/navigation"

import { formResolver, type FormRequest } from "@/consts/schema/auth/verification"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { LoginByGoogleButton } from "@/components/pages/auth/login-by-google-button"
import { FormHeader } from "@/components/pages/auth/form-header"
import { RegisterCTA } from "@/components/pages/auth/register-cta"
import { OTPFormField } from "@/components/pages/auth/otp-form-field"
import { Separator } from "@/components/pages/auth/separator"
import { useAuthVerification } from "@/hooks/queries/auth"

export function VerificationForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter()
  const form = formResolver()

  const { mutateAsync, isPending } = useAuthVerification()

  async function onSubmit(request: FormRequest) {
    mutateAsync({ data: request }).then(() => {     
      router.push(`/login`)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
        <FormHeader 
          title="تایید حساب کاربری"
          description="برای تایید حساب کاربری خود، کد یکبار مصرفی را که ارسال کردیم را در فرم زیر وارد کنید."  
        />

        <div className="grid gap-6">
          <OTPFormField form={form} />

          <Button type="submit" className="w-full cursor-pointer" loading={isPending}>
            تایید
          </Button>

          <Separator />

          <LoginByGoogleButton />
        </div>

        <RegisterCTA />
      </form>
    </Form>
  )
}
