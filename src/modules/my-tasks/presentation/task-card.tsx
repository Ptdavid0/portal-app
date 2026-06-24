"use client";

import Link from "next/link";
import { cn } from "@/shared/lib/cn";
import type { Task } from "@/modules/my-tasks/domain/my-tasks.types";
import { isMandatoryTask } from "@/modules/my-tasks/domain/my-tasks.types";

export function TaskCard({
  task,
  onComplete,
  isCompleting,
}: {
  task: Task;
  onComplete: (taskId: string) => void;
  isCompleting: boolean;
}) {
  const isMandatory = isMandatoryTask(task);

  return (
    <div className="rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white) p-6 transition hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-(--aubay-black)">{task.title}</h3>
        </div>
        <span
          className={cn(
            "shrink-0 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
            isMandatory ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
          )}
        >
          {task.type}
        </span>
      </div>

      <p className="mt-2 text-sm text-(--aubay-grey)">{task.description}</p>

      <div className="mt-4 flex flex-wrap gap-3 text-xs text-(--aubay-grey)">
        {task.dueDate && (
          <span className="inline-flex items-center gap-1">
            <i className="fa-solid fa-calendar" aria-hidden />
            {new Date(task.dueDate).toLocaleDateString("pt-PT")}
          </span>
        )}
        {task.priority && (
          <span className="inline-flex items-center gap-1">
            <i
              className={cn(
                "fa-solid fa-flag",
                task.priority === "Alta" && "text-red-500",
                task.priority === "Normal" && "text-yellow-500",
                task.priority === "Baixa" && "text-green-500"
              )}
              aria-hidden
            />
            {task.priority}
          </span>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        {task.actionUrl ? (
          <Link
            href={task.actionUrl}
            className="inline-flex items-center rounded-(--radius) bg-(--aubay-orange) px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
          >
            <i className="fa-solid fa-arrow-right mr-2" aria-hidden />
            {task.actionLabel}
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex items-center rounded-(--radius) bg-gray-200 px-4 py-2 text-sm font-semibold text-(--aubay-grey) cursor-not-allowed"
          >
            {task.actionLabel}
          </button>
        )}

        <button
          type="button"
          onClick={() => onComplete(task.id)}
          disabled={isCompleting}
          className="inline-flex items-center rounded-(--radius) border border-(--aubay-warmgrey) px-4 py-2 text-sm font-semibold text-(--aubay-black) hover:bg-gray-50 disabled:opacity-50"
        >
          <i className="fa-solid fa-check mr-2" aria-hidden />
          Concluído
        </button>
      </div>
    </div>
  );
}
