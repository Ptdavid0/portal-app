"use client";

import { TimesheetNovaPage } from "@/modules/timesheet/presentation/timesheet-nova-page";
import { PrivateHeader } from "@/shared/ui/private-header";

export function TimesheetNovaClient({ className }: { className?: string }) {
  return (
    <div className={className}>
      <PrivateHeader title="Nova timesheet" subtitle="Registo de horas" />
      <TimesheetNovaPage />
    </div>
  );
}

