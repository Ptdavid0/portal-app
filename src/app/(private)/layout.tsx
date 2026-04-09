import { AuthGuard } from "@/modules/auth/presentation/auth-guard";
import { PrivateShell } from "@/shared/ui/private-shell";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <PrivateShell>{children}</PrivateShell>
    </AuthGuard>
  );
}

