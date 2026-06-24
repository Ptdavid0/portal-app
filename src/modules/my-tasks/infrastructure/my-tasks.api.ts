import type { Task, TasksResponse } from "@/modules/my-tasks/domain/my-tasks.types";

const mockTasks: Task[] = [
  {
    id: "task-001",
    title: "Preencher formulário de dados pessoais",
    description:
      "Atualiza os teus dados pessoais no perfil. Esta informação é essencial para manter o sistema atualizado.",
    type: "Obrigatória",
    status: "Pendente",
    actionLabel: "Ir para Perfil",
    actionUrl: "/profile",
    dueDate: "2026-07-15",
    priority: "Alta",
  },
  {
    id: "task-002",
    title: "Registar horas deste mês",
    description:
      "Completa o registo de horas deste mês. Não te esqueças de confirmar antes da data limite.",
    type: "Obrigatória",
    status: "Pendente",
    actionLabel: "Abrir Timesheet",
    actionUrl: "/timesheet",
    dueDate: "2026-06-30",
    priority: "Alta",
  },
  {
    id: "task-003",
    title: "Atualizar foto de perfil",
    description: "Uma foto clara de perfil ajuda a melhorar a comunicação entre colaboradores.",
    type: "Recomendada",
    status: "Pendente",
    actionLabel: "Carregar Foto",
    actionUrl: "/profile",
    priority: "Normal",
  },
  {
    id: "task-004",
    title: "Completar avaliação de desempenho",
    description: "Avaliação anual de desempenho. Recomendado para o teu desenvolvimento profissional.",
    type: "Recomendada",
    status: "Pendente",
    actionLabel: "Abrir Avaliação",
    dueDate: "2026-07-30",
    priority: "Normal",
  },
];

export async function getMyTasks(): Promise<TasksResponse> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const pendingTasks = mockTasks.filter((t) => t.status === "Pendente");

  return {
    tasks: mockTasks,
    totalPending: pendingTasks.length,
  };
}

export async function completeTask(taskId: string): Promise<void> {
  console.log(`[Task Completed] ID: ${taskId}`);
  await new Promise((resolve) => setTimeout(resolve, 500));
}
