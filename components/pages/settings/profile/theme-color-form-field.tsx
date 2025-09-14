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

type WithThemeColor = { preferences: { theme_color: string } };

export function ThemeColorFormField<T extends WithThemeColor>({
  form,
}: {
  form: UseFormReturn<T>;
}) {
  return (
    <FormField
      control={form.control}
      name={"preferences.theme_color" as Path<T>}
      render={({ field }) => (
        <FormItem className="flex h-fit items-center justify-between gap-4 py-3 pr-2.5 pl-4 md:h-16">
          <div className="space-y-1">
            <FormLabel htmlFor="preferences.theme_color" className="text-sm leading-tight">
              رنگ زمینه
            </FormLabel>
            <FormDescription className="text-xs font-light text-pretty text-neutral-600 md:leading-none dark:text-neutral-400">
              یک تم دلخواه برای برنامه انتخاب کنید.
            </FormDescription>
          </div>

          <div className="flex max-w-[50%] grow justify-end text-right">
            <FormControl>
              <ToggleGroup
                variant="outline"
                type="single"
                className="w-full"
                value={typeof field.value === "string" ? field.value : field.value?.theme_color}
                onValueChange={field.onChange}
                onBlur={field.onBlur}
                ref={field.ref}
              >
                <ToggleGroupItem value="default" aria-label="Theme Color Default">
                    <span className="w-5 h-5 rounded bg-theme-default-light dark:bg-theme-default-dark"></span>
                </ToggleGroupItem>
                <ToggleGroupItem value="red" aria-label="Theme Color Red">
                    <span className="w-5 h-5 rounded bg-theme-red"></span>
                </ToggleGroupItem>
                <ToggleGroupItem value="rose" aria-label="Theme Color Rose">
                    <span className="w-5 h-5 rounded bg-theme-rose"></span>
                </ToggleGroupItem>
                <ToggleGroupItem value="orande" aria-label="Theme Color Orande">
                    <span className="w-5 h-5 rounded bg-theme-orange"></span>
                </ToggleGroupItem>
                <ToggleGroupItem value="green" aria-label="Theme Color Green">
                    <span className="w-5 h-5 rounded bg-theme-green"></span>
                </ToggleGroupItem>
                <ToggleGroupItem value="blue" aria-label="Theme Color Blue">
                    <span className="w-5 h-5 rounded bg-theme-blue"></span>
                </ToggleGroupItem>
                <ToggleGroupItem value="yellow" aria-label="Theme Color Yellow">
                    <span className="w-5 h-5 rounded bg-theme-yellow"></span>
                </ToggleGroupItem>
                <ToggleGroupItem value="violet" aria-label="Theme Color Violet">
                    <span className="w-5 h-5 rounded bg-theme-violet"></span>
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
