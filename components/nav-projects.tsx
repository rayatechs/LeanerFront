"use client"

import {
  ChevronLeft,
  CircleFadingPlus,
  MoreHorizontal,
  GitPullRequestCreateArrow,
  PencilLine,
  type LucideIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"

export function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>پنل کاری</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <Collapsible key={item.name} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild className="rtl:!pr-2 rtl:pl-8">
                <a href={item.url}>
                  <item.icon />
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
              {item.items?.length ? (
                  <>
                    <CollapsibleTrigger asChild className="rtl:left-1 rtl:right-auto">
                      <SidebarMenuAction className="data-[state=open]:-rotate-90">
                        <ChevronLeft />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="rtl:border-l-0 rtl:border-r">
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                ) : null}
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="rtl:left-7 rtl:right-auto">
                  <SidebarMenuAction showOnHover>
                    <MoreHorizontal />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48 rtl:dir-rtl"
                  side={isMobile ? "bottom" : "left"}
                  align={isMobile ? "end" : "start"}
                >
                  <DropdownMenuItem>
                    <CircleFadingPlus className="text-muted-foreground" />
                    <span>افزودن کار جدید</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <GitPullRequestCreateArrow className="text-muted-foreground" />
                    <span>ویرایش وضعیت ها</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PencilLine className="text-muted-foreground" />
                    <span>ویرایش فیلد ها</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
