"use client";

import { WorkspaceResource } from "@/api/workspace/resource";
import Link from "next/link";

export default function WorkspaceItem(workspace: WorkspaceResource) {
	return (
		<>
			<Link key={workspace.id} href={`/workspaces/${workspace.id}`} className="p-4 border rounded-lg hover:bg-accent hover:shadow transition">
				<h2 className="text-lg font-semibold">{workspace.title}</h2>
				<p className="text-sm text-neutral-500 dark:text-neutral-400">{workspace.description}</p>
			</Link>
		</>
	)
}