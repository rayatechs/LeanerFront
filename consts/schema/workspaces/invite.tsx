import { z } from "zod";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  emails: z.array(z.email()).min(1),
});

type FormRequest = z.infer<typeof FormSchema>;

function formResolver(): UseFormReturn<FormRequest> {
  return useForm<FormRequest>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
        emails: [],
    }
  });
}

export { formResolver, FormSchema, type FormRequest };
