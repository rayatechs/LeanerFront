import { Search } from "lucide-react"

import { Label } from "@/components/ui/label"
import { SidebarInput } from "@/components/ui/sidebar"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <SidebarInput
          id="search"
          placeholder="جستجو..."
          className="h-7 pl-7 rtl:pr-7 rtl:pl-3"
        />
        <Search className="pointer-events-none absolute top-1/2 left-2 rtl:left-auto rtl:right-2 size-4 -translate-y-1/2 opacity-50 select-none" />
      </div>
    </form>
  )
}
