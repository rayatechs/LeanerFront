import { NavUser } from "@/components/pages/settings/nav-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarGroup, SidebarInset, SidebarMenuAction, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider } from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { ArrowLeft, ChevronLeft, User } from "lucide-react";
import Link from "next/link";

export default function SettingsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = {
    name: 'asdasd',
    email: 'asdasd',
    avatar: '',
  }

  const items = [{
    title: "پرفایل",
    url: "/settings/profile",
    icon: User,
    isActive: true,
  }]

  return (
    <div className="[--header-height:calc(--spacing(12))]">
      <div className="flex flex-col justify-center border fixed bg-muted/50 inset-y-0 m-1! left-0 right-0 overflow-y-auto rounded-lg">
        <div className="mx-auto flex max-w-2/3 w-full flex-col gap-4 p-0 max-md:mt-6 md:gap-8 md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
