"use client"

import { cn } from "@/lib/utils"

export function FormHeader({
  className,
  title,
  description,
  ...props
}: React.ComponentProps<"div"> & {
  title: string;
  description: string;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-2 text-center", className)} {...props}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}