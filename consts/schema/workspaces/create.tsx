import { z } from "zod";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  title: z.string(),
  description: z.string(),
  logo: z.file().mime("image/jpeg", "image/png").optional(),
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
    }
  });
}

export { formResolver, FormSchema, type FormRequest };
