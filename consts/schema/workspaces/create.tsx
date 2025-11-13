import { z } from "zod";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  title: z.string().min(1, "عنوان الزامی است"),
  description: z.string().min(1, "توضیحات الزامی است"),
  logo: z
    .custom<File>()
    .transform((file) => {
      return file || undefined;
    })
    .refine((file) => !file || (file?.type?.startsWith("image/")), {
      message: "فقط فرمت عکس مجاز است",
    }),
});

type FormRequest = z.infer<typeof FormSchema>;

function formResolver(): UseFormReturn<FormRequest> {
  return useForm<FormRequest>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      logo: undefined,
    },
  });
}

export { formResolver, FormSchema, type FormRequest };