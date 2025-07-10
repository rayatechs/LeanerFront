import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar"
import { Hourglass } from "lucide-react"
import { SearchForm } from "@/components/search-form"

export default function Page() {
  return (
    <div className="[--header-height:calc(--spacing(12))]">
      <SidebarProvider className="flex flex-col">
        <header className="sticky top-0 z-50 flex w-full items-center bg-navbar">
          <div className="flex h-(--header-height) w-full items-center gap-2 px-4 py-2">
            <div className="md:w-1/3">
              <span className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                <Hourglass width={16} />
              </span>
            </div>
            <div className="md:w-1/3 flex-1 md:flex-auto">
              <SearchForm className="w-1/2 mx-auto" />
            </div>
            <div className="w-1/3 hidden md:block">

            </div>
          </div>
        </header>
        
        <div className="flex flex-row w-full h-full">
          <AppSidebar side="right" collapsible="icon" />
          <SidebarInset className="!m-0 !rounded-l-none !rounded-b-none fixed inset-y-0 top-(--header-height) h-[calc(100svh-var(--header-height)-calc(var(--spacing) * 2))]! md:w-[calc(100%-var(--sidebar-width))] w-full left-0 overflow-y-auto peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-20px)]! transition-[left,right,width] duration-200 ease-linear">
            <SiteHeader />
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
              </div>
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl" />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
