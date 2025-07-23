"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"

export function LoginCTA({
  className,
  ...props
}: React.ComponentProps<"div">) {
    return (
      <div className={cn("text-center text-sm", className)} {...props}>
        حساب کاربری دارید؟{" "}
        <Link href="#" className="underline underline-offset-4">
          وارد
        </Link>
        {" "} شوید!
      </div>
    )
}