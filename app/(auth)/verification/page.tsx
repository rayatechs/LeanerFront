import { GalleryVerticalEnd } from "lucide-react"

import { VerificationForm } from "@/components/verification-form"

export default function RegisterPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-3">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            لینر | Leaner
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <VerificationForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block col-span-2 m-6 rounded-lg">
        <img
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale rounded-lg"
        />
      </div>
    </div>
  )
}
