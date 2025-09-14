import { z } from "zod";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  full_name: z.string(),
  bio: z.string(),
  preferences: z.object({
    timezone: z.string(),
    language: z.string(),
    appearance: z.string(),
    theme_color: z.string(),
  }),
});

type FormRequest = z.infer<typeof FormSchema>;

function formResolver(): UseFormReturn<FormRequest> {
  return useForm<FormRequest>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      full_name: "",
      bio: "",
      preferences: {
        timezone: "",
        language: "",
        appearance: "",
        theme_color: ""
      }
    }
  });
}

export { formResolver, FormSchema, type FormRequest };
