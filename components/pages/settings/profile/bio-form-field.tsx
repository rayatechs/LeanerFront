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
import { Textarea } from "@/components/ui/textarea";

type WithBio = { bio?: string };

export function BioFormField<T extends WithBio>({
  form,
}: {
  form: UseFormReturn<T>;
}) {
  return (
    <FormField
      control={form.control}
      name={"bio" as Path<T>}
      render={({ field }) => (
        <FormItem className="flex h-fit items-center justify-between gap-4 py-3 pr-2.5 pl-4">
          <div className="space-y-1">
            <FormLabel htmlFor="bio" className="text-sm leading-tight">
              بیوگرافی
            </FormLabel>
            <FormDescription className="text-xs font-light text-pretty text-neutral-600 md:leading-none dark:text-neutral-400">
              توضیح کوتاهی درباره خود بنویسید.
            </FormDescription>
          </div>

          <div className="flex max-w-[50%] grow justify-end text-right">
            <FormControl>
              <Textarea
                className="text-right"
                placeholder="درباره خود بنویسید..."
                id="bio"
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
