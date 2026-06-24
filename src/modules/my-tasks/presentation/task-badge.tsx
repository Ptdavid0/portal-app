"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { myTasksQuery } from "@/modules/my-tasks/application/my-tasks.queries";

export function TaskBadge() {
  const { data } = useQuery(myTasksQuery());
  const pendingCount = data?.totalPending ?? 0;

  if (pendingCount === 0) return null;

  return (
    <Link
      href="/my-tasks"
      className="relative inline-flex items-center gap-2 rounded-(--radius) px-3 py-2 text-sm font-semibold text-(--aubay-orange) hover:bg-orange-50 transition"
    >
      <i className="fa-solid fa-list-check" aria-hidden />
      <span>Ações</span>
      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-(--aubay-orange) text-white text-xs font-bold">
        {pendingCount}
      </span>
    </Link>
  );
}
