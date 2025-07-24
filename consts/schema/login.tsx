import { z } from "zod"
import { useForm, type UseFormReturn } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const FormSchema = z.object({
  email: z
    .email('پست الکترونیک را به درستی وارد کنید'),

  password: z
    .string('رمزعبور را وارد کنید')
    .min(8, { message: 'رمزعبور باید حداقل 8 کاراکتر باشد' })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
      message: 'رمزعبور باید شامل حداقل یک حرف، یک عدد و یک نماد خاص باشد',
    }),
})

type FormValues = z.infer<typeof FormSchema>

function formResolver(): UseFormReturn<FormValues> {
  return useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
        email: '',
        password: '',
    },
  })
}

export { formResolver, FormSchema, type FormValues }