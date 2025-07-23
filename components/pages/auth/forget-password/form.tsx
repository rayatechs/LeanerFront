"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { LoginByGoogleButton } from "@/components/pages/auth/login-by-google-button"
import { FormHeader } from "@/components/pages/auth/form-header"
import { RegisterCTA } from "@/components/pages/auth/register-cta"

const forgetPasswordFormSchema = z.object({
  email: z
    .email('پست الکترونیک را به درستی وارد کنید')
})
type forgetPasswordFormValues = z.infer<typeof forgetPasswordFormSchema>

export function ForgetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = useForm<forgetPasswordFormValues>({
    resolver: zodResolver(forgetPasswordFormSchema),
    mode: "onChange",
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: forgetPasswordFormValues) {
    console.log(values)
    const res = await fetch('/api/forgetPassword');
    console.log(res);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
        <FormHeader 
          title="فراموشی رمزعبور"
          description="برای ارسال ایمیل بازیابی حساب کاربری خود، اطلاعات خود را در فرم زیر وارد کنید."  
        />

        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel htmlFor="email">پست الکترونیک</FormLabel>
                <FormControl>
                  <Input
                    className="text-left"
                    id="email"
                    placeholder="johndoe@mail.com"
                    type="email"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full cursor-pointer">
            ارسال
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
