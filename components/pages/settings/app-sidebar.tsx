"use client";

import * as React from "react";
import { User, ArrowLeft } from "lucide-react";

import { NavMain } from "@/components/pages/settings/nav-main";
import { NavUser } from "@/components/pages/settings/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  user: {
    name: "علی دبیری",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "پرفایل",
      url: "/settings/profile",
      icon: User,
      isActive: true,
    },
  ],
  // projects: [
  //   {
  //     name: "بکلاگ",
  //     url: "#",
  //     icon: GalleryVerticalEnd,
  //     items: [
  //       {
  //         title: "بکلاگ فنی",
  //         url: "#",
  //       },
  //       {
  //         title: "بکلاگ محصول",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     name: "اسپرینت",
  //     url: "#",
  //     icon: SendToBack,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <Link href="/dashboard" className="flex flex-row items-center p-2">
          <ArrowLeft size={16} className="rtl:rotate-180 ml-1" />
          <span>برگشت</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
