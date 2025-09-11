"use client"

import { formResolver, type FormRequest } from "@/consts/schema/auth/login"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { LoginByGoogleButton } from "@/components/pages/auth/login-by-google-button"
import { FormHeader } from "@/components/pages/auth/form-header"
import { RegisterCTA } from "@/components/pages/auth/register-cta"
import { EmailFormField } from "@/components/pages/auth/email-form-field"
import { PasswordFormField } from "@/components/pages/auth/password-form-field"
import { Separator } from "@/components/pages/auth/separator"
import { useAuthLogin } from "@/hooks/queries/auth"
import { useRouter } from "next/navigation"
import { AxiosError } from "axios"
import { setToken } from "@/lib/auth"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter()
  const form = formResolver()

  const { mutateAsync, isPending } = useAuthLogin()


  async function onSubmit(request: FormRequest) {
    mutateAsync({ data: request }).then((res) => {
      setToken(res.data.access_token)
      router.push('/dashboard')
    }).catch((err: AxiosError) => {
      if (err.status === 403) {
        router.push(`/verification?email=${request.email}`)
      }
    })
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

          <Button type="submit" className="w-full cursor-pointer" loading={isPending}>
            ورود
          </Button>

          <Separator />

          <LoginByGoogleButton />
        </div>

        <RegisterCTA />
      </form>
    </Form>
  )
}
