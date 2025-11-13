"use client"

import { Input } from "@/components/ui/input"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

export function FormStepOne({
  form
}: { form: UseFormReturn<{
    title: string;
    description: string;
    logo?: File | undefined;
} | {
    emails: string[];
} | Record<string, never>, unknown, {
    title: string;
    description: string;
    logo?: File | undefined;
} | {
    emails: string[];
} | Record<string, never>> }) {
  return (
    <div className="grid gap-4">              
      <FormField
        control={form.control}
        name={"title"}
        render={({ field }) => (
          <FormItem className="grid gap-3">
            <div className="space-y-1">
              <FormLabel htmlFor="title" className="text-sm leading-tight">
                عنوان
              </FormLabel>
            </div>

            <div className="flex grow justify-end text-right">
              <FormControl>
                <Input
                  className="text-right"
                  id="title"
                  placeholder="میحط کاری من"
                  type="text"
                  {...field}
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={"logo"}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <FormItem className="grid gap-3">
            <div className="space-y-1">
              <FormLabel htmlFor="avatar" className="text-sm leading-tight">
                لوگو
              </FormLabel>
            </div>

            <div className="flex grow justify-end text-right">
              <FormControl>
                <Input
                  id="avatar"
                  type="file"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  accept="image/*"
                  multiple={false}
                  onChange={(e) => {
                    console.log(e.target.files?.[0])
                    onChange(e.target.files?.[0] ?? null)
                  }}
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={"description"}
        render={({ field }) => (
          <FormItem className="grid gap-3">
            <div className="space-y-1">
              <FormLabel htmlFor="description" className="text-sm leading-tight">
                توضیحات
              </FormLabel>
            </div>

            <div className="flex grow justify-end text-right">
              <FormControl>
                <Textarea
                  className="text-right"
                  id="description"
                  placeholder="توضیحاتی درباره فضای کاری‌ات بنویس"
                  {...field}
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
