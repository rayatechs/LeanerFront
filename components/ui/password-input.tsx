'use client'

import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Eye, EyeClosed } from "lucide-react"

function PasswordInput({ className, ...props }: React.ComponentProps<"input">) {
  const [ showPassword, setShowPassword ] = React.useState(false)
  const disabled = props.value === '' || props.value === undefined || props.disabled
    
  return (
    <div className="relative w-full">
      <Input
        type={showPassword ? 'text' : 'password'}
        className={cn("hide-password-toggle pr-10", className)}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:!bg-transparent cursor-pointer"
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={disabled}
      >
        {showPassword && !disabled ? (
          <Eye className="h-4 w-4" aria-hidden="true" />
        ) : (
          <EyeClosed className="h-4 w-4" aria-hidden="true" />
        )}
        <span className="sr-only">
          {showPassword ? 'Hide password' : 'Show password'}
        </span>
      </Button>
    </div>
  )
}

export { PasswordInput }
