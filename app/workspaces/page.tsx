"use client";

import { useWorkspaces } from "@/api/workspace/query";
import { WorkspaceResource } from "@/api/workspace/resource";
import WorkspaceForm from "@/components/pages/workspaces/workspace-create-dialog";
import WorkspaceItem from "@/components/pages/workspaces/workspace-item";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WorkspacePage() {
  // const { workspacesQuery } = useWorkspaces()
  // const { data: workspacesData, isLoading } = workspacesQuery();
  // const [workspaces, setWorkspaces] = useState<WorkspaceResource[]>([]);

  // useEffect(() => {
  //   setWorkspaces(workspacesData ?? []);
  // }, []);

  const myWorkspaces = [  ];

  return (
    <>
      <div>
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-2xl font-bold">فضاهای کاری من</h1>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          همه پروژه‌ها و تیم‌هایی که خودت ساخته‌ای در این بخش هستند.
        </p>

        {myWorkspaces.length === 0 ? (
          <div className="mt-4 p-8 border border-dashed rounded-lg text-center text-sm text-neutral-500 dark:text-neutral-400">
            <p>همین حالا یه فضای کاری بساز و پروژه‌هات رو مدیریت کن.</p>
            <WorkspaceForm />
          </div>
        ) : (
          <div className="mt-4 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
            {/* {myWorkspaces.map((workspace) => <WorkspaceItem key={workspace.id} {...workspace} /> )} */}

            <WorkspaceForm />
          </div>
        )}

      </div>
    </>
  );
}