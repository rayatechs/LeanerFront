"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { LoginByGoogleButton } from "@/components/pages/auth/login-by-google-button"
import { FormHeader } from "@/components/pages/auth/form-header"
import { LoginCTA } from "@/components/pages/auth/login-cta"

const registerFormSchema = z.object({
  fullname: z.string('نام و نام‌خانوادگی را وارد کنید'),
  email: z
    .email('پست الکترونیک را به درستی وارد کنید'),
  password: z
    .string('رمزعبور را وارد کنید')
    .min(8, { message: 'رمزعبور باید حداقل 8 کاراکتر باشد' })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
      message: 'رمزعبور باید شامل حداقل یک حرف، یک عدد و یک نماد خاص باشد',
    }),
  confirmPassword: z.string('تکرار رمزعبور را وارد کنید')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'رمزعبور و تکرار آن باید یکسان باشند',
  path: ["confirmPassword"],
})

type registerFormValues = z.infer<typeof registerFormSchema>

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = useForm<registerFormValues>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: registerFormValues) {
    console.log(values)    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
        <FormHeader 
          title="ساخت حساب کاربری"
          description="برای ساخت حساب کاربری خود، اطلاعات خود را در فرم زیر وارد کنید."  
        />

        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel htmlFor="fullname">نام و نام‌خانوادگی</FormLabel>
                <FormControl>
                  <Input
                    className="text-right"
                    id="fullname"
                    placeholder="علی علوی"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <div className="flex justify-between items-center">
                  <FormLabel htmlFor="password">رمزعبور</FormLabel>
                </div>
                <FormControl>
                  <PasswordInput
                    className="text-left"
                    id="password"
                    placeholder="******"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <div className="flex justify-between items-center">
                  <FormLabel htmlFor="confirmPassword">تکرار رمزعبور</FormLabel>
                </div>
                <FormControl>
                  <PasswordInput
                    className="text-left"
                    id="confirmPassword"
                    placeholder="******"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full cursor-pointer">
            ثبت نام
          </Button>

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              یا ادامه با
            </span>
          </div>

          <LoginByGoogleButton />
        </div>

        <LoginCTA />
      </form>
    </Form>
  )
}
