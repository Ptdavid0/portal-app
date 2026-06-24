export type TaskType = "Obrigatória" | "Recomendada";
export type TaskStatus = "Pendente" | "Concluída" | "Arquivada";

export type Task = {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  status: TaskStatus;
  actionLabel: string;
  actionUrl?: string;
  dueDate?: string;
  completedAt?: string;
  priority?: "Alta" | "Normal" | "Baixa";
};

export type TasksResponse = {
  tasks: Task[];
  totalPending: number;
};

export function isMandatoryTask(task: Task): boolean {
  return task.type === "Obrigatória";
}

export function blocksTimesheet(task: Task): boolean {
  return isMandatoryTask(task) && task.status === "Pendente";
}
