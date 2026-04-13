"use client";

import Link from "next/link";

import { PrivateHeader } from "@/shared/ui/private-header";

export default function Page() {
  return (
    <div className="min-h-full">
      <PrivateHeader title="Nova timesheet" subtitle="Em construção" />
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white) p-6">
          <p className="text-sm font-semibold text-(--aubay-grey)">
            Esta página vai permitir criar uma nova timesheet. Por agora, deixámos o acesso pronto no botão.
          </p>
          <div className="mt-4">
            <Link
              href="/timesheet"
              className="inline-flex items-center justify-center gap-2 rounded-(--radius) bg-(--aubay-orange) px-5 py-2.5 text-sm font-extrabold text-white hover:opacity-95"
            >
              <i className="fa-solid fa-arrow-left" aria-hidden />
              Voltar à timesheet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

