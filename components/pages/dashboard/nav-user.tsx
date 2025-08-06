"use client"

import * as React from "react"

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
  Moon,
  Sun,
  Palette
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import { useTheme } from "next-themes"
import { useThemeColor } from "@/hooks/use-theme-color"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()
  const { theme, setTheme } = useTheme()
  const { themeColor, setThemeColor } = useThemeColor()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left rtl:text-right text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg rtl:dir-rtl"
            side={isMobile ? "bottom" : "left"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left rtl:text-right text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left rtl:text-right text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                ارتقاء به پریمیوم
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                حساب کاربری
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                صورت حساب
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                نوتیفیکیشن ها
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Palette />
                  ظاهر
                </DropdownMenuSubTrigger>
                <DropdownMenuContent className="w-56 rtl:dir-rtl" side="left">
                  <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                    <DropdownMenuRadioItem value="dark">
                      <Moon />
                      تم دارک
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="light">
                      <Sun />
                      تم لایت
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={themeColor} onValueChange={setThemeColor}>
                    <DropdownMenuRadioItem value="default">
                      <span className="w-4 h-4 rounded bg-theme-default-light dark:bg-theme-default-dark"></span>
                      پیشفرض
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="red">
                      <span className="w-4 h-4 rounded bg-theme-red"></span>
                      قرمز
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="rose">
                      <span className="w-4 h-4 rounded bg-theme-rose"></span>
                      رز
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="orange">
                      <span className="w-4 h-4 rounded bg-theme-orange"></span>
                      نارنجی
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="green">
                      <span className="w-4 h-4 rounded bg-theme-green"></span>
                      سبز
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="blue">
                      <span className="w-4 h-4 rounded bg-theme-blue"></span>
                      آبی
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="yellow">
                      <span className="w-4 h-4 rounded bg-theme-yellow"></span>
                      زرد
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="violet">
                      <span className="w-4 h-4 rounded bg-theme-violet"></span>
                      بنفش
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              خروج
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
