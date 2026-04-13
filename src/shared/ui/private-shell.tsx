"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { cn } from "@/shared/lib/cn";

type NavItem =
  | { kind: "link"; label: string; href: string; iconClass: string }
  | {
      kind: "group";
      label: string;
      iconClass: string;
      items: Array<{ label: string; href?: string; active?: boolean }>;
      defaultOpen?: boolean;
    };

export function PrivateShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const nav: NavItem[] = useMemo(
    () => [
      { kind: "link", label: "Página Principal", href: "/dashboard", iconClass: "fa-solid fa-house" },
      {
        kind: "group",
        label: "Timesheet",
        iconClass: "fa-solid fa-clock",
        defaultOpen: false,
        items: [{ label: "Registo de horas" }, { label: "Consulta de férias" }],
      },
      // {
      //   kind: "group",
      //   label: "Recursos Humanos",
      //   iconClass: "fa-solid fa-users",
      //   defaultOpen: false,
      //   items: [
      //     { label: "Oportunidades internas" },
      //     { label: "Formação e Desenvolvimento" },
      //     { label: "PDI" },
      //     { label: "Competências e Certificações" },
      //   ],
      // },
      {
        kind: "group",
        label: "Pedidos",
        iconClass: "fa-solid fa-file-lines",
        defaultOpen: false,
        items: [{ label: "Abrir pedido" }, { label: "Os Meus Pedidos" }],
      },
      // {
      //   kind: "group",
      //   label: "Benefícios",
      //   iconClass: "fa-solid fa-gift",
      //   defaultOpen: false,
      //   items: [{ label: "Lista de benefícios" }, { label: "Dúvidas e pedidos" }],
      // },
      // {
      //   kind: "group",
      //   label: "Documentos",
      //   iconClass: "fa-solid fa-folder-open",
      //   defaultOpen: false,
      //   items: [{ label: "Extratos / Demonstrativos" }, { label: "Assinaturas" }],
      // },
      {
        kind: "group",
        label: "Comunicação interna",
        iconClass: "fa-solid fa-bullhorn",
        defaultOpen: false,
        items: [{ label: "Políticas Internas" }, { label: "Contatos" }],
      },
      {
        kind: "group",
        label: "Perfil",
        iconClass: "fa-solid fa-user-circle",
        defaultOpen: true,
        items: [
          { label: "Dados do colaborador", href: "/profile" },
        ],
      },
    ],
    [],
  );

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const item of nav) {
      if (item.kind === "group") initial[item.label] = Boolean(item.defaultOpen);
    }
    return initial;
  });

  return (
    <div className="flex min-h-dvh bg-(--aubay-offwhite)">
      <aside className="sticky top-0 flex h-dvh w-72 flex-col overflow-hidden border-r border-[var(--aubay-warmgrey)] bg-[var(--aubay-white)]">
        <div className="border-b border-(--aubay-warmgrey) px-6 py-5">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius)] bg-[var(--aubay-orange)]">
              <i className="fa-solid fa-building text-lg text-white" aria-hidden />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-(--aubay-black)">Portal</h1>
              <p className="text-xs text-(--aubay-grey)">Colaborador</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-hidden px-3 py-4">
          {nav.map((item) => {
            if (item.kind === "link") {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "mb-1 flex items-center space-x-3 rounded-[var(--radius)] px-3 py-2.5 text-[var(--aubay-black)] hover:bg-gray-100",
                    active && "bg-[#FEF0EB] text-[var(--aubay-orange)]",
                  )}
                >
                  <i className={cn(item.iconClass, "w-5")} aria-hidden />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            }

            const open = openGroups[item.label] ?? false;
            const anyChildActive = item.items.some((x) => x.href && pathname === x.href);
            return (
              <div key={item.label} className="mt-2">
                <button
                  type="button"
                  onClick={() => setOpenGroups((s) => ({ ...s, [item.label]: !open }))}
                  className={cn(
                    "mb-1 flex w-full items-center justify-between rounded-[var(--radius)] px-3 py-2.5 text-[var(--aubay-black)] hover:bg-gray-100",
                    anyChildActive && "bg-[#FEF0EB] text-[var(--aubay-orange)]",
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <i className={cn(item.iconClass, "w-5")} aria-hidden />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <i
                    className={cn("fa-solid fa-chevron-down text-xs transition", open && "rotate-180")}
                    aria-hidden
                  />
                </button>

                {open && (
                  <div className="ml-8 space-y-1">
                    {item.items.map((child) => {
                      const childActive = Boolean(child.href && pathname === child.href);
                      if (!child.href) {
                        return (
                          <span
                            key={child.label}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 opacity-70"
                          >
                            {child.label}
                          </span>
                        );
                      }
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-[var(--radius)] px-3 py-2 text-sm text-[var(--aubay-grey)] hover:bg-gray-50 hover:text-[var(--aubay-black)]",
                            childActive && "bg-[#FEF0EB] font-medium text-[var(--aubay-orange)]",
                          )}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-[var(--aubay-warmgrey)] px-3 py-4">
          <button
            type="button"
            className="flex w-full items-center space-x-3 rounded-[var(--radius)] px-3 py-2.5 text-red-600 hover:bg-red-50"
          >
            <i className="fa-solid fa-right-from-bracket w-5" aria-hidden />
            <span className="text-sm font-medium">Terminar sessão</span>
          </button>
        </div>
      </aside>

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}

