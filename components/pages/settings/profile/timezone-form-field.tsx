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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type WithTimezone = { preferences:{ timezone: string } };

export function TimezoneFormField<T extends WithTimezone>({
  form,
}: {
  form: UseFormReturn<T>;
}) {
  return (
    <FormField
      control={form.control}
      name={"preferences.timezone" as Path<T>}
      render={({ field }) => (
        <FormItem className="flex h-fit items-center justify-between gap-4 py-3 pr-2.5 pl-4 md:h-16">
          <div className="space-y-1">
            <FormLabel htmlFor="preferences.timezone" className="text-sm leading-tight">
              منطقه زمانی
            </FormLabel>
            <FormDescription className="text-xs font-light text-pretty text-neutral-600 md:leading-none dark:text-neutral-400">
              منطقه خود را سفارشی کنید.
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
                <SelectTrigger id="timezone" className="w-full text-right">
                  <SelectValue placeholder="انتخاب منطقه زمانی" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>آسیا</SelectLabel>
                    <SelectItem value="Asia/Tehran">Asia/Tehran (ایران)</SelectItem>
                    <SelectItem value="Asia/Dubai">Asia/Dubai (امارات)</SelectItem>
                    <SelectItem value="Asia/Kolkata">Asia/Kolkata (هند)</SelectItem>
                    <SelectItem value="Asia/Tokyo">Asia/Tokyo (ژاپن)</SelectItem>
                    <SelectItem value="Asia/Shanghai">Asia/Shanghai (چین)</SelectItem>
                    <SelectItem value="Asia/Karachi">Asia/Karachi (پاکستان)</SelectItem>
                    <SelectItem value="Asia/Riyadh">Asia/Riyadh (عربستان)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>اروپا</SelectLabel>
                    <SelectItem value="Europe/London">Europe/London (انگلستان)</SelectItem>
                    <SelectItem value="Europe/Berlin">Europe/Berlin (آلمان)</SelectItem>
                    <SelectItem value="Europe/Moscow">Europe/Moscow (روسیه)</SelectItem>
                    <SelectItem value="Europe/Paris">Europe/Paris (فرانسه)</SelectItem>
                    <SelectItem value="Europe/Rome">Europe/Rome (ایتالیا)</SelectItem>
                    <SelectItem value="Asia/Istanbul">Europe/Istanbul (ترکیه)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>آمریکا</SelectLabel>
                    <SelectItem value="America/New_York">America/New_York (نیویورک)</SelectItem>
                    <SelectItem value="America/Los_Angeles">America/Los_Angeles (لس آنجلس)</SelectItem>
                    <SelectItem value="America/Sao_Paulo">America/Sao_Paulo (برزیل)</SelectItem>
                    <SelectItem value="Australia/Sydney">Australia/Sydney (استرالیا)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>آفریقا</SelectLabel>÷
                    <SelectItem value="Africa/Cairo">Africa/Cairo (مصر)</SelectItem>
                    <SelectItem value="Africa/Johannesburg">Africa/Johannesburg (آفریقای جنوبی)</SelectItem>
                  </SelectGroup>
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
