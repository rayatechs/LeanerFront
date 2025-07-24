"use client"

import { cn } from "@/lib/utils"

export function Separator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn(
        "relative text-center text-sm", 
        "after:border-border after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t",
        className
      )} 
      {...props}
    >
      <span className="bg-background text-muted-foreground relative z-10 px-2">
        یا ادامه با
      </span>
    </div>
  )
}