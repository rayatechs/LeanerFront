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
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Moon, Sun } from "lucide-react";

type WithAppearance = { preferences: { appearance: string } };

export function AppearanceFormField<T extends WithAppearance>({
  form,
}: {
  form: UseFormReturn<T>;
}) {
  return (
    <FormField
      control={form.control}
      name={"preferences.appearance" as Path<T>}
      render={({ field }) => (
        <FormItem className="flex h-fit items-center justify-between gap-4 py-3 pr-2.5 pl-4 md:h-16">
          <div className="space-y-1">
            <FormLabel htmlFor="preferences.appearance" className="text-sm leading-tight">
              ظاهر
            </FormLabel>
            <FormDescription className="text-xs font-light text-pretty text-neutral-600 md:leading-none dark:text-neutral-400">
              حالت روشن یا تاریک را انتخاب کنید.
            </FormDescription>
          </div>

          <div className="flex max-w-[50%] grow justify-end text-right">
            <FormControl>
              <ToggleGroup
                variant="outline"
                type="single"
                className="w-full"
                value={typeof field.value === "string" ? field.value : field.value?.appearance}
                onValueChange={field.onChange}
                onBlur={field.onBlur}
                ref={field.ref}
              >
                <ToggleGroupItem value="light" aria-label="Light Mode">
                    <Sun />
                    تم لایت
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" aria-label="Dark Mode">
                    <Moon />
                    تم دارک
                </ToggleGroupItem>
              </ToggleGroup>
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
