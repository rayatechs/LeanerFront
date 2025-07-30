import { z } from "zod"
import { useForm, type UseFormReturn } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const FormSchema = z.object({
  email: z
    .email('پست الکترونیک را به درستی وارد کنید')
})

type FormRequest = z.infer<typeof FormSchema>

function formResolver(): UseFormReturn<FormRequest> {
  return useForm<FormRequest>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
        email: '',
    },
  })
}

export { formResolver, FormSchema, type FormRequest }