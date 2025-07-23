"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"

export function RegisterCTA({
  className,
  ...props
}: React.ComponentProps<"div">) {
    return (
      <div className={cn("text-center text-sm", className)} {...props}>
        حساب کاربری ندارید؟{" "}
        <Link href="#" className="underline underline-offset-4">
          ثبت نام
        </Link>
        {" "} کنید!
      </div>
    )
}