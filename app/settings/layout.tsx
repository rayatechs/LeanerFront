import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/pages/settings/app-sidebar";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="[--header-height:calc(--spacing(12))]">
      <SidebarProvider className="flex flex-col">
        <div className="flex flex-row w-full h-full">
          <AppSidebar side="right" />

          <SidebarInset className="fixed bg-muted/50 inset-y-0 mt-1! md:w-[calc(100%-var(--sidebar-width))] w-full left-0 overflow-y-auto peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-20px)]! transition-[left,right,width] duration-200 ease-linear">
            <div className="mx-auto flex max-w-(--breakpoint-lg) w-full flex-col gap-4 p-0 max-md:mt-6 md:gap-8 md:p-12">
              {children}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
