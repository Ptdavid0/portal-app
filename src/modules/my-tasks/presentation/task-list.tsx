"use client";

import { TaskCard } from "./task-card";
import type { Task } from "@/modules/my-tasks/domain/my-tasks.types";

export function TaskList({
  tasks,
  onCompleteTask,
  completingTaskId,
}: {
  tasks: Task[];
  onCompleteTask: (taskId: string) => void;
  completingTaskId?: string;
}) {
  const pendingTasks = tasks.filter((t) => t.status === "Pendente");
  const completedTasks = tasks.filter((t) => t.status === "Concluída");

  if (pendingTasks.length === 0) {
    return (
      <div className="rounded-(--radius) border border-green-200 bg-green-50 p-8 text-center">
        <i className="fa-solid fa-circle-check text-3xl text-green-600 mb-3" aria-hidden />
        <p className="text-lg font-semibold text-green-900">Sem tarefas pendentes!</p>
        <p className="mt-1 text-sm text-green-700">
          Excelente! Está em dia com todas as tarefas obrigatórias.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-(--aubay-black) mb-4">
          Tarefas Pendentes ({pendingTasks.length})
        </h2>
        <div className="space-y-4">
          {pendingTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={onCompleteTask}
              isCompleting={completingTaskId === task.id}
            />
          ))}
        </div>
      </div>

      {completedTasks.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-(--aubay-black) mb-4">
            Tarefas Concluídas ({completedTasks.length})
          </h2>
          <div className="space-y-4 opacity-60">
            {completedTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onComplete={() => {}}
                isCompleting={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
