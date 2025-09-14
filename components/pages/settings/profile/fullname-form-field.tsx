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
import { Input } from "@/components/ui/input";

type WithFullname = { full_name?: string };

export function FullnameFormField<T extends WithFullname>({
  form,
}: {
  form: UseFormReturn<T>;
}) {
  return (
    <FormField
      control={form.control}
      name={"full_name" as Path<T>}
      render={({ field }) => (
        <FormItem className="flex h-fit items-center justify-between gap-4 py-3 pr-2.5 pl-4 md:h-16">
          <div className="space-y-1">
            <FormLabel htmlFor="full_name" className="text-sm leading-tight">
              نام و نام‌خانوادگی
            </FormLabel>
          </div>

          <div className="flex max-w-[50%] grow justify-end text-right">
            <FormControl>
              <Input
                className="text-right"
                id="full_name"
                placeholder="علی علوی"
                type="text"
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
