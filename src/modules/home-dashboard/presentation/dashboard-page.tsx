"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { employeeProfileQuery } from "@/modules/employee-profile/application/employee-profile.queries";
import { cn } from "@/shared/lib/cn";
import { PrivateHeader } from "@/shared/ui/private-header";

const folhaHorasUrl = process.env.NEXT_PUBLIC_PORTAL_FOLHA_HORAS_URL;
const clubeAubilousUrl = process.env.NEXT_PUBLIC_PORTAL_CLUBE_AUBILOUS_URL;
const aubayELearningUrl = process.env.NEXT_PUBLIC_PORTAL_AUBAY_ELEARNING_URL;
const consultarFeriasUrl = process.env.NEXT_PUBLIC_PORTAL_CONSULTAR_FERIAS_URL;

function isAbsoluteHttpUrl(href: string) {
  return /^https?:\/\//i.test(href);
}

function FolhaHorasAction({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const base = cn(
    "inline-flex shrink-0 items-center justify-center rounded-[var(--radius)] px-4 py-2 text-sm font-bold transition",
    className,
  );

  if (!folhaHorasUrl) {
    return (
      <button
        type="button"
        disabled
        className={cn(base, "cursor-not-allowed bg-gray-200 text-[var(--aubay-grey)]")}
        title="Defina NEXT_PUBLIC_PORTAL_FOLHA_HORAS_URL em .env.local"
      >
        {children}
      </button>
    );
  }

  if (isAbsoluteHttpUrl(folhaHorasUrl)) {
    return (
      <a
        href={folhaHorasUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, "bg-[var(--aubay-orange)] text-white hover:opacity-95")}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={folhaHorasUrl}
      className={cn(base, "bg-[var(--aubay-orange)] text-white hover:opacity-95")}
    >
      {children}
    </Link>
  );
}

function QuickAccessCard({
  title,
  description,
  href,
  iconClass,
}: {
  title: string;
  description: string;
  href?: string;
  iconClass: string;
}) {
  const shellClass = cn(
    "flex h-full flex-col rounded-[var(--radius)] border bg-[var(--aubay-white)] p-6 transition",
    href
      ? "border-[var(--aubay-warmgrey)] hover:border-[var(--aubay-orange)] hover:shadow-sm"
      : "cursor-not-allowed border-dashed border-[var(--aubay-warmgrey)] opacity-80",
  );

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <i
          className={cn(iconClass, "mt-0.5 text-lg text-[var(--aubay-orange)]")}
          aria-hidden
        />
        {href && (
          <i
            className={cn(
              "text-sm text-[var(--aubay-grey)]",
              isAbsoluteHttpUrl(href)
                ? "fa-solid fa-arrow-up-right-from-square"
                : "fa-solid fa-chevron-right",
            )}
            aria-hidden
          />
        )}
      </div>
      <h3 className="mt-4 text-base font-semibold tracking-[-0.01em] text-[var(--aubay-black)]">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-[var(--aubay-grey)]">{description}</p>
      {!href && <p className="mt-3 text-xs font-semibold text-[var(--aubay-grey)]">URL por configurar</p>}
    </>
  );

  if (!href) {
    return <div className={shellClass}>{inner}</div>;
  }

  if (isAbsoluteHttpUrl(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={shellClass}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={shellClass}>
      {inner}
    </Link>
  );
}

function ConsultarFeriasAction() {
  const className =
    "inline-flex shrink-0 items-center justify-center rounded-[var(--radius)] bg-[var(--aubay-orange)] px-5 py-2.5 text-sm font-bold text-white hover:opacity-95";

  if (!consultarFeriasUrl) {
    return (
      <button
        type="button"
        disabled
        className="inline-flex shrink-0 cursor-not-allowed items-center justify-center rounded-[var(--radius)] bg-gray-200 px-5 py-2.5 text-sm font-bold text-[var(--aubay-grey)]"
        title="Defina NEXT_PUBLIC_PORTAL_CONSULTAR_FERIAS_URL em .env.local"
      >
        Consultar férias
      </button>
    );
  }

  if (isAbsoluteHttpUrl(consultarFeriasUrl)) {
    return (
      <a
        href={consultarFeriasUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        Consultar férias
      </a>
    );
  }

  return (
    <Link href={consultarFeriasUrl} className={className}>
      Consultar férias
    </Link>
  );
}

export function DashboardPage() {
  const { data, isPending } = useQuery(employeeProfileQuery());

  const headerTitle = isPending
    ? "Bem-vindo"
    : `Bem-vindo, ${data?.fullName?.trim() || "Colaborador"}`;
  const headerSubtitle = isPending ? "A carregar dados…" : (data?.currentRole?.trim() || "—");

  return (
    <div className="min-h-full">
      <PrivateHeader
        title={headerTitle}
        subtitle={headerSubtitle}
        identity={data ? { fullName: data.fullName, id: data.id } : undefined}
        identityLoading={isPending}
      />

      <div className="p-8">
        <div
          className="flex flex-col gap-4 rounded-[var(--radius)] border border-amber-200 bg-amber-50/90 p-4 sm:flex-row sm:items-center sm:justify-between"
          role="status"
        >
          <div className="flex gap-3">
            <i
              className="fa-solid fa-clock mt-0.5 text-amber-700"
              aria-hidden
            />
            <p className="text-sm font-semibold text-amber-950">
              Ainda não preencheste as horas deste mês. Usa a folha de horas para registar o tempo e manter o acompanhamento em dia.
            </p>
          </div>
          <FolhaHorasAction>Ir para a folha de horas</FolhaHorasAction>
        </div>

        <div className="mt-6 w-full rounded-[var(--radius)] border border-[var(--aubay-warmgrey)] bg-[var(--aubay-white)] p-6">
          <h3 className="text-lg font-semibold tracking-[-0.01em] text-[var(--aubay-black)]">Saldo de férias</h3>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-wrap gap-10">
              <div>
                <p className="text-xs font-semibold tracking-[.14em] uppercase text-[var(--aubay-grey)]">
                  Dias disponíveis
                </p>
                <p className="mt-2 text-3xl font-bold tabular-nums tracking-[-0.02em] text-[var(--aubay-black)]">
                  —
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[.14em] uppercase text-[var(--aubay-grey)]">Dias usados</p>
                <p className="mt-2 text-3xl font-bold tabular-nums tracking-[-0.02em] text-[var(--aubay-black)]">
                  —
                </p>
              </div>
            </div>
            <ConsultarFeriasAction />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold tracking-[-0.01em] text-[var(--aubay-black)]">Acesso rápido</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <QuickAccessCard
              title="Clube Aubilous"
              description="Benefícios, parcerias e vantagens para colaboradores Aubay."
              href={clubeAubilousUrl}
              iconClass="fa-solid fa-gift"
            />
            <QuickAccessCard
              title="Aubay e-learning"
              description="Formação contínua disponível na plataforma."
              href={aubayELearningUrl}
              iconClass="fa-solid fa-graduation-cap"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
