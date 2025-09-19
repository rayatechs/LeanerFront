import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export default function NewButton() {
    return (
			<Dialog>
				<form>
					<DialogTrigger asChild>
						<Button className="p-0 h-7 cursor-pointer gap-0" variant="outline">
							<Plus />
							<span className="hidden md:inline mr-1">جدید</span>
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Edit profile</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save when you&apos;re
								done.
							</DialogDescription>
						</DialogHeader>

						<div className="grid gap-4">
							<div className="grid gap-3">
								<Label htmlFor="name-1">Name</Label>
								<Input id="name-1" name="name" defaultValue="Pedro Duarte" />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="username-1">Username</Label>
								<Input id="username-1" name="username" defaultValue="@peduarte" />
							</div>
						</div>

						<DialogFooter>
							<DialogClose asChild>
								<Button variant="outline">Cancel</Button>
							</DialogClose>
							<Button type="submit">Save changes</Button>
						</DialogFooter>
					</DialogContent>
				</form>
			</Dialog>
    )
}