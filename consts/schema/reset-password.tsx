import { z } from "zod"
import { useForm, type UseFormReturn } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const FormSchema = z.object({
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

type FormValues = z.infer<typeof FormSchema>

function formResolver(): UseFormReturn<FormValues> {
  return useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })
}

export { formResolver, FormSchema, type FormValues }