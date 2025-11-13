"use client";

import { useCreateMutation } from "@/api/workspace/query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { defineStepper } from "@/components/ui/stepper";
import { FormRequest as StepOneFormRequest, formResolver as StepOneFormResolver, FormSchema as StepOneSchema } from "@/consts/schema/workspaces/create";
import { FormSchema as StepTwoSchema } from "@/consts/schema/workspaces/invite";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { FormStepOne } from "./form-step-one";
import { FormStepThree } from "./form-step-three";
import { FormStepTwo } from "./form-step-two";

const { useStepper, steps, utils } = defineStepper(
  { id: 'form_step_one', title: 'ساخت فضای کاری', schema: StepOneSchema, resolver: StepOneFormResolver },
  { id: 'form_step_two', title: 'دعوت اعضا', schema: StepTwoSchema, resolver: () => null },
  { id: 'form_step_three', title: 'شروع به کار', schema: z.object({}), resolver: () => null },
);

export default function WorkspaceCreateDialog({ style = "button" }: { style?: "button" | "item" }) {
  const stepper = useStepper();
  const currentIndex = utils.getIndex(stepper.current.id);

  const form = stepper.current.resolver()

  const { mutateAsync, isPending } = useCreateMutation()

  async function onSubmit(request: z.infer<typeof stepper.current.schema>) {
    switch (stepper.current.id) {
      case 'form_step_one':
        mutateAsync({ data: request as StepOneFormRequest }).then(() => {
          stepper.next();
        })

        break;

      case 'form_step_two':
        stepper.next();
        break;

      default:

        break;
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {style === "button" ? (
          <Button variant="outline" className="mt-4 cursor-pointer">
            ساختن فضای کاری جدید
          </Button>
        ) : (
          <Button variant="ghost" className="p-4 h-full border-2 border-dashed rounded-lg hover:bg-accent hover:shadow transition cursor-pointer">
            ساختن فضای کاری جدید
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>یه خونه برای تیمت بساز</DialogTitle>
          <DialogDescription>
            فضای کاری تازه بساز و همه پروژه‌هات رو زیر یه سقف جمع کن.
          </DialogDescription>
        </DialogHeader>

        <Form {...form as UseFormReturn<StepOneFormRequest>}>
          <form onSubmit={form?.handleSubmit(onSubmit)}>
            <ol className="flex flex-col gap-2" aria-orientation="vertical">
              {stepper.all.map((step, index, array) => (
                <React.Fragment key={step.id}>
                  <li className="flex items-center gap-4 flex-shrink-0">
                    <Button
                      type="button"
                      role="tab"
                      variant={index <= currentIndex ? 'default' : 'secondary'}
                      aria-current={
                        stepper.current.id === step.id ? 'step' : undefined
                      }
                      aria-posinset={index + 1}
                      aria-setsize={steps.length}
                      aria-selected={stepper.current.id === step.id}
                      className="flex size-10 items-center justify-center rounded-full"
                      onClick={() => stepper.goTo(step.id)}
                    >
                      {index + 1}
                    </Button>
                    <span className="text-sm font-medium">{step.title}</span>
                  </li>
                  <div className="flex gap-4">
                    {index < array.length - 1 && (
                      <div
                        className="flex justify-center"
                        style={{
                          paddingInlineStart: '1.25rem',
                        }}
                      >
                        <Separator
                          orientation="vertical"
                          className={`w-[1px] h-full ${index < currentIndex ? 'bg-primary' : 'bg-muted'
                            }`}
                        />
                      </div>
                    )}
                    <div className="flex-1 my-4">
                      {stepper.current.id === step.id &&
                        stepper.switch({
                          form_step_one: () => <FormStepOne form={form as UseFormReturn<any>} />,
                          form_step_two: () => <FormStepTwo />,
                          form_step_three: () => <FormStepThree />,
                        })}
                    </div>
                  </div>
                </React.Fragment>
              ))}
              <DialogFooter>
                <div className="flex justify-end gap-4">
                  <Button type="submit" className="cursor-pointer" loading={isPending}>
                    {stepper.isLast ? 'تمام' : 'بعدی'}
                  </Button>
                </div>
              </DialogFooter>
            </ol>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}