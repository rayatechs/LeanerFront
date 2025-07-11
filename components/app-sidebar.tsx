"use client"

import * as React from "react"
import {
  Inbox,
  GalleryVerticalEnd,
  LifeBuoy,
  SendToBack,
  Send,
  MessageCircleMore,
  House,
  Ellipsis
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "علی دبیری",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "خانه",
      url: "#",
      icon: House,
      isActive: true,
    },
    {
      title: "اعلانات",
      url: "#",
      icon: Inbox
    },
    {
      title: "گفتگوها",
      url: "#",
      icon: MessageCircleMore
    },
    {
      title: "بیشتر",
      url: "#",
      icon: Ellipsis
    },
  ],
  navSecondary: [
    {
      title: "پشتیبانی",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "بازخورد",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "بکلاگ",
      url: "#",
      icon: GalleryVerticalEnd,
      items: [
        {
          title: "بکلاگ فنی",
          url: "#",
        },
        {
          title: "بکلاگ محصول",
          url: "#",
        }
      ],
    },
    {
      name: "اسپرینت",
      url: "#",
      icon: SendToBack,
    }
  ],
  teams: [
    {
      name: "سلام کریپتو",
      logo: GalleryVerticalEnd,
      plan: "همتا",
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!" variant="inset" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
