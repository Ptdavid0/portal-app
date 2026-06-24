import { queryOptions } from "@tanstack/react-query";

import { getMyTasks } from "@/modules/my-tasks/infrastructure/my-tasks.api";

export const myTasksQuery = () =>
  queryOptions({
    queryKey: ["my-tasks"],
    queryFn: getMyTasks,
    staleTime: 60_000,
    refetchOnWindowFocus: false,
  });
