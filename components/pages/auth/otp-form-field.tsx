"use client"

import { type UseFormReturn, type Path } from "react-hook-form"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { useAuthResendOtp } from "@/hooks/queries/auth"
import { useEffect, useState } from "react"

type WithOTP = { otp: string }

export function OTPFormField<T extends WithOTP>({ form }: { form: UseFormReturn<T> }) {
  const [searchParams, _] = useSearchParams()  
  const { mutateAsync } = useAuthResendOtp()

  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setTimeLeft(120);
    setIsActive(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  async function resendOtp() {
    mutateAsync({ data: { email: searchParams[1]} }).then(() => {     
      startTimer();
      // show toast
    })
  }

  return (
    <FormField
      control={form.control}
      name={"otp" as Path<T>}
      render={({ field }) => (
        <FormItem className="grid gap-3">
          <div className="flex justify-between items-center">
            <FormLabel htmlFor="otp">کد یکبار مصرف</FormLabel>
            <Button
              type="button"
              onClick={resendOtp}
              variant={"link"}
              className="ml-auto rtl:mr-auto rtl:ml-0 text-sm underline-offset-4 hover:underline p-0 cursor-pointer"
              disabled={isActive}
            >
              {isActive ? (
                formatTime(timeLeft)
              ) : (
                "ارسال مجدد"
              )}
            </Button>
          </div>

          <FormControl>
            <InputOTP containerClassName="justify-between" id="otp"  maxLength={6} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={4} />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}