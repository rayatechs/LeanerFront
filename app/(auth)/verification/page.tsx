import { VerificationForm } from "@/components/pages/auth/verification/form"
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerificationForm />
    </Suspense>
  )
}
