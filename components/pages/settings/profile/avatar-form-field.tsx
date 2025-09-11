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

type WithAvatar = { avatar?: File };

export function AvatarFormField<T extends WithAvatar>({
  form,
}: {
  form: UseFormReturn<T>;
}) {
  return (
    <FormField
      control={form.control}
      name={"avatar" as Path<T>}
      render={({ field: { onChange, onBlur, name, ref } }) => (
        <FormItem className="flex h-fit items-center justify-between gap-4 py-3 pr-2.5 pl-4 md:h-16">
          <div className="space-y-1">
            <FormLabel htmlFor="avatar" className="text-sm leading-tight">
              تصویر پروفایل
            </FormLabel>
            <FormDescription className="text-xs font-light text-pretty text-neutral-600 md:leading-none dark:text-neutral-400">
              اختیاری
            </FormDescription>
          </div>

          <div className="flex max-w-[50%] grow justify-end text-right">
            <FormControl>
              <Input
                id="avatar"
                type="file"
                name={name}
                ref={ref}
                onBlur={onBlur}
                onChange={(e) => onChange(e.target.files?.[0] ?? null)}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
