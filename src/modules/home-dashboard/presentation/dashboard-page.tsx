"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { employeeProfileQuery } from "@/modules/employee-profile/application/employee-profile.queries";
import { PrivateHeader } from "@/shared/ui/private-header";

export function DashboardPage() {
  const { data } = useQuery(employeeProfileQuery());

  return (
    <div className="min-h-full">
      <PrivateHeader title="Dashboard" subtitle="Página inicial do colaborador" />

      <div className="p-8">
        <div className="rounded-[var(--radius)] border border-[var(--aubay-warmgrey)] bg-[var(--aubay-white)] p-6">
          <h3 className="text-lg font-black tracking-[-0.01em] text-[var(--aubay-black)]">
            Bem-vindo{data?.fullName ? `, ${data.fullName}` : ""}.
          </h3>
          <p className="mt-2 text-sm text-[var(--aubay-grey)]">
            Esta é a base inicial do portal. A partir daqui o projeto pode crescer por módulos/domínios
            sem adicionar camadas prematuras.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/profile"
              className="inline-flex items-center rounded-[var(--radius)] bg-[var(--aubay-orange)] px-4 py-2 text-sm font-bold text-white hover:opacity-95"
            >
              Ir para o meu perfil
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-[var(--radius)] bg-gray-100 px-4 py-2 text-sm font-bold text-[var(--aubay-black)] hover:bg-gray-200"
            >
              Atualizar
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-[var(--radius)] border border-[var(--aubay-warmgrey)] bg-[var(--aubay-white)] p-6">
            <p className="text-xs font-bold tracking-[.14em] uppercase text-[var(--aubay-grey)]">Estado</p>
            <p className="mt-2 text-sm font-bold text-[var(--aubay-black)]">Base pronta para evoluir</p>
          </div>
          <div className="rounded-[var(--radius)] border border-[var(--aubay-warmgrey)] bg-[var(--aubay-white)] p-6">
            <p className="text-xs font-bold tracking-[.14em] uppercase text-[var(--aubay-grey)]">
              Dados do colaborador
            </p>
            <p className="mt-2 text-sm font-bold text-[var(--aubay-black)]">Tipados + query pronta</p>
          </div>
          <div className="rounded-[var(--radius)] border border-[var(--aubay-warmgrey)] bg-[var(--aubay-white)] p-6">
            <p className="text-xs font-bold tracking-[.14em] uppercase text-[var(--aubay-grey)]">Formulários</p>
            <p className="mt-2 text-sm font-bold text-[var(--aubay-black)]">React Hook Form + Zod</p>
          </div>
        </div>
      </div>
    </div>
  );
}

