"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { employeeProfileQuery } from "@/modules/employee-profile/application/employee-profile.queries";
import { cn } from "@/shared/lib/cn";
import { PrivateHeader } from "@/shared/ui/private-header";

type TimesheetStatus = "Submetido" | "Rejeitado" | "Rascunho" | "Aprovado";
type TimesheetRow = {
  id: string;
  collaboratorName: string;
  year: number;
  monthLabel: string;
  status: TimesheetStatus;
  clients: string[];
  projects: string[];
  updatedAt: string; // dd/mm/yyyy hh:mm:ss (placeholder)
  updatedBy: string;
};

function StatusPill({ status }: { status: TimesheetStatus }) {
  const ui = {
    Submetido: "border-amber-200 bg-amber-50 text-amber-900",
    Rejeitado: "border-red-200 bg-red-50 text-red-900",
    Rascunho: "border-slate-200 bg-slate-50 text-slate-900",
    Aprovado: "border-emerald-200 bg-emerald-50 text-emerald-900",
  }[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-bold tracking-[-0.01em]",
        ui,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" aria-hidden />
      {status}
    </span>
  );
}

function IconField({
  iconClass,
  children,
  muted,
}: {
  iconClass: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2 text-sm font-semibold", muted ? "text-(--aubay-grey)" : "text-(--aubay-black)")}>
      <i className={cn(iconClass, "text-(--aubay-orange)")} aria-hidden />
      <span className="truncate">{children}</span>
    </div>
  );
}

function FiltersBar({
  search,
  setSearch,
  year,
  setYear,
  month,
  setMonth,
  status,
  setStatus,
  client,
  setClient,
  onClear,
}: {
  search: string;
  setSearch: (v: string) => void;
  year: string;
  setYear: (v: string) => void;
  month: string;
  setMonth: (v: string) => void;
  status: string;
  setStatus: (v: string) => void;
  client: string;
  setClient: (v: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="border-b border-(--aubay-warmgrey) bg-[#faf8f6] p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.7fr_.9fr_1fr_auto] lg:items-center">
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-(--aubay-grey)" aria-hidden />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Nome ou Aubay ID"
            className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-white py-2 pl-9 pr-3 text-sm font-semibold text-(--aubay-black) outline-none ring-(--aubay-orange)/30 focus:ring-2"
          />
        </div>

        <div className="relative">
          <i className="fa-regular fa-calendar pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-(--aubay-grey)" aria-hidden />
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full appearance-none rounded-(--radius) border border-(--aubay-warmgrey) bg-white py-2 pl-9 pr-9 text-sm font-semibold text-(--aubay-black) outline-none ring-(--aubay-orange)/30 focus:ring-2"
          >
            <option value="">Ano</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
          </select>
          <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-(--aubay-grey)" aria-hidden />
        </div>

        <div className="relative">
          <i className="fa-regular fa-calendar-days pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-(--aubay-grey)" aria-hidden />
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full appearance-none rounded-(--radius) border border-(--aubay-warmgrey) bg-white py-2 pl-9 pr-9 text-sm font-semibold text-(--aubay-black) outline-none ring-(--aubay-orange)/30 focus:ring-2"
          >
            <option value="">Mês</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
          <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-(--aubay-grey)" aria-hidden />
        </div>

        <div className="relative">
          <i className="fa-regular fa-flag pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-(--aubay-grey)" aria-hidden />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full appearance-none rounded-(--radius) border border-(--aubay-warmgrey) bg-white py-2 pl-9 pr-9 text-sm font-semibold text-(--aubay-black) outline-none ring-(--aubay-orange)/30 focus:ring-2"
          >
            <option value="">Estado</option>
            <option value="Submetido">Submetido</option>
            <option value="Rejeitado">Rejeitado</option>
            <option value="Rascunho">Rascunho</option>
            <option value="Aprovado">Aprovado</option>
          </select>
          <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-(--aubay-grey)" aria-hidden />
        </div>

        <div className="relative">
          <i className="fa-solid fa-user-tie pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-(--aubay-grey)" aria-hidden />
          <input
            value={client}
            onChange={(e) => setClient(e.target.value)}
            type="text"
            placeholder="Cliente"
            className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-white py-2 pl-9 pr-3 text-sm font-semibold text-(--aubay-black) outline-none ring-(--aubay-orange)/30 focus:ring-2"
          />
        </div>

        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center justify-center rounded-(--radius) bg-(--aubay-black) px-4 py-2 text-sm font-extrabold text-white hover:opacity-95"
        >
          Limpar
        </button>
      </div>
    </div>
  );
}

function MyFiltersBar({
  year,
  setYear,
  month,
  setMonth,
  status,
  setStatus,
  onClear,
}: {
  year: string;
  setYear: (v: string) => void;
  month: string;
  setMonth: (v: string) => void;
  status: string;
  setStatus: (v: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="border-b border-(--aubay-warmgrey) bg-[#faf8f6] p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[.7fr_.7fr_.9fr_auto] lg:items-center">
        <div className="relative">
          <i
            className="fa-regular fa-calendar pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-(--aubay-grey)"
            aria-hidden
          />
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full appearance-none rounded-(--radius) border border-(--aubay-warmgrey) bg-white py-2 pl-9 pr-9 text-sm font-semibold text-(--aubay-black) outline-none ring-(--aubay-orange)/30 focus:ring-2"
          >
            <option value="">Ano</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
          </select>
          <i
            className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-(--aubay-grey)"
            aria-hidden
          />
        </div>

        <div className="relative">
          <i
            className="fa-regular fa-calendar-days pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-(--aubay-grey)"
            aria-hidden
          />
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full appearance-none rounded-(--radius) border border-(--aubay-warmgrey) bg-white py-2 pl-9 pr-9 text-sm font-semibold text-(--aubay-black) outline-none ring-(--aubay-orange)/30 focus:ring-2"
          >
            <option value="">Mês</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
          <i
            className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-(--aubay-grey)"
            aria-hidden
          />
        </div>

        <div className="relative">
          <i
            className="fa-regular fa-flag pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-(--aubay-grey)"
            aria-hidden
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full appearance-none rounded-(--radius) border border-(--aubay-warmgrey) bg-white py-2 pl-9 pr-9 text-sm font-semibold text-(--aubay-black) outline-none ring-(--aubay-orange)/30 focus:ring-2"
          >
            <option value="">Estado</option>
            <option value="Submetido">Submetido</option>
            <option value="Rejeitado">Rejeitado</option>
            <option value="Rascunho">Rascunho</option>
            <option value="Aprovado">Aprovado</option>
          </select>
          <i
            className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-(--aubay-grey)"
            aria-hidden
          />
        </div>

        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center justify-center rounded-(--radius) bg-(--aubay-black) px-4 py-2 text-sm font-extrabold text-white hover:opacity-95"
        >
          Limpar
        </button>
      </div>
    </div>
  );
}

function TableActions({
  actions,
}: {
  actions: Array<{ iconClass: string; label: string; onClick?: () => void; href?: string }>;
}) {
  return (
    <div className="flex items-center justify-end gap-2">
      {actions.map((a) => {
        const base =
          "inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--aubay-warmgrey) bg-white text-(--aubay-black) shadow-sm hover:border-(--aubay-orange) hover:text-(--aubay-orange)";
        if (a.href) {
          return (
            <Link key={a.label} href={a.href} className={base} aria-label={a.label} title={a.label}>
              <i className={cn(a.iconClass, "text-sm")} aria-hidden />
            </Link>
          );
        }
        return (
          <button
            key={a.label}
            type="button"
            onClick={a.onClick}
            className={base}
            aria-label={a.label}
            title={a.label}
          >
            <i className={cn(a.iconClass, "text-sm")} aria-hidden />
          </button>
        );
      })}
    </div>
  );
}

function TimesheetTable({
  rows,
  actionsForRow,
}: {
  rows: TimesheetRow[];
  actionsForRow: (row: TimesheetRow) => Array<{ iconClass: string; label: string; onClick?: () => void; href?: string }>;
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white)">
      {/* Desktop table */}
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <table className="min-w-[1100px] w-full border-collapse text-left">
            <thead>
              <tr className="bg-(--aubay-black) text-white">
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Colaborador</th>
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Ano</th>
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Mês</th>
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Estado</th>
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Clientes</th>
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Projetos</th>
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Última atualização</th>
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Atualizado por</th>
                <th className="px-5 py-3 text-right text-xs font-extrabold uppercase tracking-[.14em]">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--aubay-warmgrey)">
              {rows.map((r) => (
                <tr key={r.id} className="hover:bg-[#FEF0EB]/40">
                  <td className="px-5 py-4 text-sm font-bold text-(--aubay-black)">{r.collaboratorName}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-(--aubay-black) tabular-nums">{r.year}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-(--aubay-black)">{r.monthLabel}</td>
                  <td className="px-5 py-4">
                    <StatusPill status={r.status} />
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-(--aubay-black)">
                    <span className="block max-w-[380px] truncate" title={r.clients.join(", ")}>
                      {r.clients.join(", ") || "—"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-(--aubay-black)">
                    <span className="block max-w-[380px] truncate" title={r.projects.join(", ")}>
                      {r.projects.join(", ") || "—"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-(--aubay-grey) tabular-nums">{r.updatedAt}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-(--aubay-black)">{r.updatedBy}</td>
                  <td className="px-5 py-4">
                    <TableActions actions={actionsForRow(r)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile card list */}
      <div className="md:hidden">
        <div className="divide-y divide-(--aubay-warmgrey)">
          {rows.map((r) => (
            <div key={r.id} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-extrabold text-(--aubay-black)">{r.collaboratorName}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <StatusPill status={r.status} />
                    <span className="text-xs font-bold text-(--aubay-grey)">
                      {r.monthLabel} • {r.year}
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <TableActions actions={actionsForRow(r)} />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2">
                <IconField iconClass="fa-solid fa-user-tie">{r.clients.join(", ") || "—"}</IconField>
                <IconField iconClass="fa-solid fa-diagram-project">{r.projects.join(", ") || "—"}</IconField>
                <IconField iconClass="fa-regular fa-clock" muted>
                  {r.updatedAt} • {r.updatedBy}
                </IconField>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination (UI placeholder) */}
      <div className="flex flex-col gap-3 border-t border-(--aubay-warmgrey) bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[.14em] text-(--aubay-grey)">Linhas</span>
          <div className="relative">
            <select className="appearance-none rounded-full border border-(--aubay-warmgrey) bg-white py-1.5 pl-3 pr-8 text-sm font-bold text-(--aubay-black) outline-none ring-(--aubay-orange)/30 focus:ring-2">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-(--aubay-grey)" aria-hidden />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--aubay-warmgrey) bg-white text-(--aubay-grey) disabled:opacity-50"
              aria-label="Primeira página"
              title="Primeira página"
            >
              <i className="fa-solid fa-angles-left text-xs" aria-hidden />
            </button>
            <button
              type="button"
              disabled
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--aubay-warmgrey) bg-white text-(--aubay-grey) disabled:opacity-50"
              aria-label="Página anterior"
              title="Página anterior"
            >
              <i className="fa-solid fa-angle-left text-xs" aria-hidden />
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--aubay-black) text-sm font-extrabold text-white shadow-sm"
              aria-label="Página 1"
              title="Página 1"
            >
              1
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--aubay-warmgrey) bg-white text-sm font-extrabold text-(--aubay-black) hover:border-(--aubay-orange)"
              aria-label="Página 2"
              title="Página 2"
            >
              2
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--aubay-warmgrey) bg-white text-(--aubay-grey) hover:border-(--aubay-orange) hover:text-(--aubay-black)"
              aria-label="Página seguinte"
              title="Página seguinte"
            >
              <i className="fa-solid fa-angle-right text-xs" aria-hidden />
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--aubay-warmgrey) bg-white text-(--aubay-grey) hover:border-(--aubay-orange) hover:text-(--aubay-black)"
              aria-label="Última página"
              title="Última página"
            >
              <i className="fa-solid fa-angles-right text-xs" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyTimesheetTable({
  rows,
  actionsForRow,
}: {
  rows: TimesheetRow[];
  actionsForRow: (row: TimesheetRow) => Array<{ iconClass: string; label: string; onClick?: () => void; href?: string }>;
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white)">
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full border-collapse text-left">
            <thead>
              <tr className="bg-(--aubay-black) text-white">
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Ano</th>
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Mês</th>
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Classificação</th>
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Clientes envolvidos</th>
                <th className="px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em]">Projetos envolvidos</th>
                <th className="px-5 py-3 text-right text-xs font-extrabold uppercase tracking-[.14em]">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--aubay-warmgrey)">
              {rows.map((r) => (
                <tr key={r.id} className="hover:bg-[#FEF0EB]/40">
                  <td className="px-5 py-4 text-sm font-semibold text-(--aubay-black) tabular-nums">{r.year}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-(--aubay-black)">{r.monthLabel}</td>
                  <td className="px-5 py-4">
                    <StatusPill status={r.status} />
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-(--aubay-black)">
                    <span className="block max-w-[420px] truncate" title={r.clients.join(", ")}>
                      {r.clients.join(", ") || "—"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-(--aubay-black)">
                    <span className="block max-w-[420px] truncate" title={r.projects.join(", ")}>
                      {r.projects.join(", ") || "—"}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <TableActions actions={actionsForRow(r)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden">
        <div className="divide-y divide-(--aubay-warmgrey)">
          {rows.map((r) => (
            <div key={r.id} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusPill status={r.status} />
                    <span className="text-xs font-bold text-(--aubay-grey)">
                      {r.monthLabel} • {r.year}
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <TableActions actions={actionsForRow(r)} />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2">
                <IconField iconClass="fa-solid fa-user-tie">{r.clients.join(", ") || "—"}</IconField>
                <IconField iconClass="fa-solid fa-diagram-project">{r.projects.join(", ") || "—"}</IconField>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-(--aubay-warmgrey) bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[.14em] text-(--aubay-grey)">Linhas</span>
          <div className="relative">
            <select className="appearance-none rounded-full border border-(--aubay-warmgrey) bg-white py-1.5 pl-3 pr-8 text-sm font-bold text-(--aubay-black) outline-none ring-(--aubay-orange)/30 focus:ring-2">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-(--aubay-grey)" aria-hidden />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--aubay-warmgrey) bg-white text-(--aubay-grey) disabled:opacity-50"
              aria-label="Primeira página"
              title="Primeira página"
            >
              <i className="fa-solid fa-angles-left text-xs" aria-hidden />
            </button>
            <button
              type="button"
              disabled
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--aubay-warmgrey) bg-white text-(--aubay-grey) disabled:opacity-50"
              aria-label="Página anterior"
              title="Página anterior"
            >
              <i className="fa-solid fa-angle-left text-xs" aria-hidden />
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--aubay-black) text-sm font-extrabold text-white shadow-sm"
              aria-label="Página 1"
              title="Página 1"
            >
              1
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--aubay-warmgrey) bg-white text-sm font-extrabold text-(--aubay-black) hover:border-(--aubay-orange)"
              aria-label="Página 2"
              title="Página 2"
            >
              2
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--aubay-warmgrey) bg-white text-(--aubay-grey) hover:border-(--aubay-orange) hover:text-(--aubay-black)"
              aria-label="Página seguinte"
              title="Página seguinte"
            >
              <i className="fa-solid fa-angle-right text-xs" aria-hidden />
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--aubay-warmgrey) bg-white text-(--aubay-grey) hover:border-(--aubay-orange) hover:text-(--aubay-black)"
              aria-label="Última página"
              title="Última página"
            >
              <i className="fa-solid fa-angles-right text-xs" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  title,
  right,
}: {
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h3 className="flex items-center gap-3 text-lg font-extrabold tracking-[-0.01em] text-(--aubay-black)">
        <span className="h-6 w-1.5 rounded-full bg-(--aubay-orange)" aria-hidden />
        {title}
      </h3>
      {right}
    </div>
  );
}

export function TimesheetPage() {
  const { data, isPending } = useQuery(employeeProfileQuery());

  const isManager = (data?.aubay?.category ?? "") === "Gestor";
  const headerSubtitle = isPending ? "A carregar dados…" : (data?.currentRole?.trim() || "—");

  const [myYear, setMyYear] = useState("");
  const [myMonth, setMyMonth] = useState("");
  const [myStatus, setMyStatus] = useState("");

  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [status, setStatus] = useState("");
  const [client, setClient] = useState("");

  const baseRows: TimesheetRow[] = useMemo(
    () => [
      {
        id: "t1",
        collaboratorName: data?.fullName || "Miguel Moreira",
        year: 2026,
        monthLabel: "Abril",
        status: "Submetido",
        clients: ["Aubay - Sede"],
        projects: ["Research & Development"],
        updatedAt: "03/03/2026 12:16:13",
        updatedBy: "Tatiane Souto",
      },
      {
        id: "t2",
        collaboratorName: "Tatiane Souto",
        year: 2026,
        monthLabel: "Março",
        status: "Rejeitado",
        clients: ["B Braun Avitum", "Aubay - Sede"],
        projects: ["Serviço", "Research", "Onboarding"],
        updatedAt: "18/03/2026 15:35:10",
        updatedBy: "Tatiane Souto",
      },
      {
        id: "t3",
        collaboratorName: "João Silva",
        year: 2026,
        monthLabel: "Abril",
        status: "Rascunho",
        clients: ["Cliente X"],
        projects: ["Projeto Y"],
        updatedAt: "08/04/2026 09:01:02",
        updatedBy: "João Silva",
      },
    ],
    [data?.fullName],
  );

  const myFilteredRows = useMemo(() => {
    return baseRows.filter((r) => {
      if (myYear && String(r.year) !== myYear) return false;
      if (myMonth && monthLabelToNumber(r.monthLabel) !== Number(myMonth)) return false;
      if (myStatus && r.status !== myStatus) return false;
      return true;
    });
  }, [baseRows, myMonth, myStatus, myYear]);

  const filteredRows = useMemo(() => {
    const s = search.trim().toLowerCase();
    const c = client.trim().toLowerCase();

    return baseRows.filter((r) => {
      if (s && !r.collaboratorName.toLowerCase().includes(s) && !r.updatedBy.toLowerCase().includes(s)) return false;
      if (year && String(r.year) !== year) return false;
      if (month && month !== "" && String(month) !== "" && monthLabelToNumber(r.monthLabel) !== Number(month)) return false;
      if (status && r.status !== status) return false;
      if (c && !r.clients.some((x) => x.toLowerCase().includes(c))) return false;
      return true;
    });
  }, [baseRows, client, month, search, status, year]);

  const counts = useMemo(() => {
    const timesheets = myFilteredRows.length;
    const activities = Math.max(0, timesheets * 2 + 4); // placeholder KPI
    return { timesheets, activities };
  }, [myFilteredRows.length]);

  function clearFilters() {
    setSearch("");
    setYear("");
    setMonth("");
    setStatus("");
    setClient("");
  }

  function clearMyFilters() {
    setMyYear("");
    setMyMonth("");
    setMyStatus("");
  }

  return (
    <div className="min-h-full">
      <PrivateHeader
        title="A Minha Timesheet"
        subtitle={headerSubtitle}
        identity={data ? { fullName: data.fullName, id: data.id } : undefined}
        identityLoading={isPending}
      />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white) p-4 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <h2 className="text-base font-extrabold tracking-[-0.01em] text-(--aubay-black)">
                Resumo
              </h2>
              <p className="mt-1 text-sm font-semibold text-(--aubay-grey)">
                Consulta rápida das tuas submissões e atividade recente.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
              <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-4">
                <div className="rounded-(--radius) border border-(--aubay-warmgrey) bg-white px-4 py-3">
                  <p className="text-[11px] font-extrabold uppercase tracking-[.14em] text-(--aubay-grey)">
                    Timesheets preenchidas
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <i className="fa-solid fa-file-lines text-(--aubay-orange)" aria-hidden />
                    <span className="text-2xl font-black tabular-nums tracking-[-0.02em] text-(--aubay-black)">
                      {counts.timesheets}
                    </span>
                  </div>
                </div>
                <div className="rounded-(--radius) border border-(--aubay-warmgrey) bg-white px-4 py-3">
                  <p className="text-[11px] font-extrabold uppercase tracking-[.14em] text-(--aubay-grey)">
                    Atividades realizadas
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <i className="fa-solid fa-list-check text-(--aubay-orange)" aria-hidden />
                    <span className="text-2xl font-black tabular-nums tracking-[-0.02em] text-(--aubay-black)">
                      {counts.activities}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/timesheet/nova"
                className="inline-flex items-center justify-center gap-2 rounded-(--radius) bg-(--aubay-orange) px-5 py-2.5 text-sm font-extrabold text-white shadow-sm hover:opacity-95"
              >
                <i className="fa-solid fa-plus" aria-hidden />
                Nova timesheet
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-10">
          <section className="flex flex-col gap-4">
            <SectionHeader title="Minha timesheet" />
            <MyFiltersBar
              year={myYear}
              setYear={setMyYear}
              month={myMonth}
              setMonth={setMyMonth}
              status={myStatus}
              setStatus={setMyStatus}
              onClear={clearMyFilters}
            />
            <MyTimesheetTable
              rows={myFilteredRows}
              actionsForRow={(row) => [
                { iconClass: "fa-regular fa-eye", label: "Ver", href: `/timesheet/${row.id}` },
              ]}
            />
          </section>

          {isManager ? (
            <>
              <section className="flex flex-col gap-4">
                <SectionHeader
                  title="Os meus colaboradores"
                  right={
                    <Link
                      href="/timesheet/nova?scope=colaborador"
                      className="inline-flex items-center justify-center gap-2 rounded-(--radius) bg-(--aubay-black) px-4 py-2 text-sm font-extrabold text-white hover:opacity-95"
                    >
                      <i className="fa-solid fa-plus" aria-hidden />
                      Nova timesheet colaborador
                    </Link>
                  }
                />
                <FiltersBar
                  search={search}
                  setSearch={setSearch}
                  year={year}
                  setYear={setYear}
                  month={month}
                  setMonth={setMonth}
                  status={status}
                  setStatus={setStatus}
                  client={client}
                  setClient={setClient}
                  onClear={clearFilters}
                />
                <TimesheetTable
                  rows={filteredRows}
                  actionsForRow={(row) => [
                    { iconClass: "fa-regular fa-eye", label: "Ver", href: `/timesheet/${row.id}` },
                    { iconClass: "fa-solid fa-pen", label: "Editar", href: `/timesheet/${row.id}/editar` },
                    { iconClass: "fa-solid fa-xmark", label: "Rejeitar", onClick: () => {} },
                  ]}
                />
              </section>

              <section className="flex flex-col gap-4">
                <SectionHeader title="Todas as timesheets" />
                <FiltersBar
                  search={search}
                  setSearch={setSearch}
                  year={year}
                  setYear={setYear}
                  month={month}
                  setMonth={setMonth}
                  status={status}
                  setStatus={setStatus}
                  client={client}
                  setClient={setClient}
                  onClear={clearFilters}
                />
                <TimesheetTable
                  rows={filteredRows}
                  actionsForRow={(row) => [
                    { iconClass: "fa-regular fa-eye", label: "Ver", href: `/timesheet/${row.id}` },
                    { iconClass: "fa-solid fa-pen", label: "Editar", href: `/timesheet/${row.id}/editar` },
                    { iconClass: "fa-solid fa-check", label: "Aprovar", onClick: () => {} },
                    { iconClass: "fa-solid fa-xmark", label: "Rejeitar", onClick: () => {} },
                  ]}
                />
              </section>

              <section className="flex flex-col gap-4">
                <SectionHeader title="Timesheets visualizador" />
                <FiltersBar
                  search={search}
                  setSearch={setSearch}
                  year={year}
                  setYear={setYear}
                  month={month}
                  setMonth={setMonth}
                  status={status}
                  setStatus={setStatus}
                  client={client}
                  setClient={setClient}
                  onClear={clearFilters}
                />
                <TimesheetTable
                  rows={filteredRows}
                  actionsForRow={(row) => [
                    { iconClass: "fa-regular fa-eye", label: "Ver", href: `/timesheet/${row.id}` },
                  ]}
                />
              </section>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function monthLabelToNumber(label: string) {
  const map: Record<string, number> = {
    Janeiro: 1,
    Fevereiro: 2,
    Março: 3,
    Abril: 4,
    Maio: 5,
    Junho: 6,
    Julho: 7,
    Agosto: 8,
    Setembro: 9,
    Outubro: 10,
    Novembro: 11,
    Dezembro: 12,
  };
  return map[label] ?? 0;
}

