"use client";

import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { FormRequest, formResolver } from "@/consts/schema/settings/profile";
import { FullnameFormField } from "./fullname-form-field";
import { BioFormField } from "./bio-form-field";
import { TimezoneFormField } from "./timezone-form-field";
import { LanguageFormField } from "./language-form-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProfileUser, useUpdateProfileUser } from "@/api/profile/query";
import { useEffect } from "react";
import { ThemeColorFormField } from "./theme-color-form-field";
import { AppearanceFormField } from "./appearance-form-field";

export function ProfileForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { data: user } = useProfileUser();
  const form = formResolver();
  
  const { mutateAsync } = useUpdateProfileUser()

  useEffect(() => {
    if (user) {
      form.reset({
        full_name: user.full_name || "",
        bio: user.bio || "",
        preferences: {
          timezone: user.preferences?.timezone || "",
          language: user.preferences?.language || "",
          appearance: user.preferences?.appearance || "",
          theme_color: user.preferences?.theme_color || ""
        },
      } as FormRequest);
    }
  }, [user, form]);

  async function onSubmit(request: FormRequest) {
    mutateAsync({ data: request });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        <Card className="bg-muted w-full gap-1">
          <CardHeader>
            <CardTitle className="text-lg">عمومی</CardTitle>
            <CardAction>
              <Button
                type="submit"
                className="cursor-pointer text-sm"
                size={"sm"}
              >
                ذخیره تعییرات
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div
              className={cn(
                "flex flex-col",
                "mt-2 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white shadow-md shadow-black/5 dark:divide-white/8 dark:border-white/8 dark:bg-white/3",
                className
              )}
            >
              <FullnameFormField form={form} />
              <BioFormField form={form} />
              <LanguageFormField form={form} />
              <TimezoneFormField form={form} />
              <ThemeColorFormField form={form} />
              <AppearanceFormField form={form} />
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
