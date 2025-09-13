"use client";

import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { FormRequest, formResolver } from "@/consts/schema/settings/avatar";
import { AvatarFormField } from "./avatar-form-field";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProfileAvatarUpdate } from "@/api/profile/query";

export function AvatarForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = formResolver();
  const { mutateAsync, isPending } = useProfileAvatarUpdate()

  async function onSubmit(request: FormRequest) {
    mutateAsync({ data: request }).then(() => {
      // get user profile
      console.log('updated');
    })
  }

  return (
    <Form {...form}>
      <form onChange={form.handleSubmit(onSubmit)} {...props}>
        <Card className="bg-muted w-full gap-1">
          <CardHeader>
            <CardTitle className="text-lg">نمایه</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={cn(
                "flex flex-col",
                "mt-2 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white shadow-md shadow-black/5 dark:divide-white/8 dark:border-white/8 dark:bg-white/3",
                className
              )}
            >
              <AvatarFormField form={form} />
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
