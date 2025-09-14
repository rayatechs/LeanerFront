"use client";

import { type UseFormReturn, type Path } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type WithLanguage = { preferences: { language: string } };

export function LanguageFormField<T extends WithLanguage>({
  form,
}: {
  form: UseFormReturn<T>;
}) {
  return (
    <FormField
      control={form.control}
      name={"preferences.language" as Path<T>}
      render={({ field }) => (
        <FormItem className="flex h-fit items-center justify-between gap-4 py-3 pr-2.5 pl-4 md:h-16">
          <div className="space-y-1">
            <FormLabel htmlFor="preferences.language" className="text-sm leading-tight">
              زبان
            </FormLabel>
            <FormDescription className="text-xs font-light text-pretty text-neutral-600 md:leading-none dark:text-neutral-400">
              زبان خود را سفارشی کنید.
            </FormDescription>
          </div>

          <div className="flex max-w-[50%] grow justify-end text-right">
            <FormControl>
              <Select
                value={field.value as string}
                onValueChange={field.onChange}
                disabled={field.disabled}
                name={field.name}
              >
                <SelectTrigger id="language" className="w-full text-right">
                  <SelectValue placeholder="انتخاب زبان" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fa">فارسی</SelectItem>
                  <SelectItem value="en">انگلیسی</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
