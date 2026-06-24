"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { myTasksQuery } from "@/modules/my-tasks/application/my-tasks.queries";
import { completeTask } from "@/modules/my-tasks/infrastructure/my-tasks.api";
import { PrivateHeader } from "@/shared/ui/private-header";
import { TaskList } from "./task-list";

export function MyTasksPage() {
  const { data, isPending, isError } = useQuery(myTasksQuery());
  const [completingTaskId, setCompletingTaskId] = useState<string | null>(null);

  const handleCompleteTask = async (taskId: string) => {
    setCompletingTaskId(taskId);
    try {
      await completeTask(taskId);
    } finally {
      setCompletingTaskId(null);
    }
  };

  return (
    <div className="min-h-full">
      <PrivateHeader
        title="Ações Pendentes"
        subtitle={
          isPending ? "A carregar ações…" : `${data?.totalPending ?? 0} ações pendentes`
        }
      />

      <div className="p-8">
        {isError && (
          <div className="rounded-(--radius) border border-red-200 bg-red-50 p-4 text-red-700">
            <i className="fa-solid fa-exclamation-circle mr-2" aria-hidden />
            Erro ao carregar tarefas. Tente novamente mais tarde.
          </div>
        )}

        {isPending ? (
          <div className="text-center py-12">
            <i className="fa-solid fa-spinner fa-spin text-3xl text-(--aubay-orange) mb-3" aria-hidden />
            <p className="text-(--aubay-grey)">A carregar tarefas…</p>
          </div>
        ) : (
          <TaskList
            tasks={data?.tasks ?? []}
            onCompleteTask={handleCompleteTask}
            completingTaskId={completingTaskId ?? undefined}
          />
        )}
      </div>
    </div>
  );
}
