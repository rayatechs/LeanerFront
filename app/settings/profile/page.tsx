"use client";

import { AvatarForm } from "@/components/pages/settings/peofile/avatar-form";

export default function ProfilePage() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-2xl font-bold">پروفایل</h1>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          اطلاعات شخصی و ترجیحات شما
        </p>
      </div>

      <AvatarForm />
    </>
  );
}
