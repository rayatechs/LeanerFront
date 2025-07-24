import { z } from "zod"
import { useForm, type UseFormReturn } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const FormSchema = z.object({
  otp: z
    .string()
    .length(6, "کد باید ۶ رقمی باشد")
    .regex(/^\d+$/, "کد باید فقط شامل اعداد باشد"),
  email: z.string()
})

type FormValues = z.infer<typeof FormSchema>

function formResolver(): UseFormReturn<FormValues> {
  return useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
        otp: undefined,
        email: ''
    },
  })
}

export { formResolver, FormSchema, type FormValues }