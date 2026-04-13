import Link from "next/link";

function initialsFromFullName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "—";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function PrivateHeader({
  title,
  subtitle,
  identity,
  identityLoading,
}: {
  title: string;
  subtitle?: string;
  identity?: { fullName: string; id: string };
  identityLoading?: boolean;
}) {
  const showLoading = Boolean(identityLoading);
  const displayName = showLoading ? "A carregar…" : (identity?.fullName ?? "João Silva");
  const displayId = showLoading ? "—" : (identity?.id ?? "12345");
  const displayInitials = showLoading ? "…" : identity ? initialsFromFullName(identity.fullName) : "JS";

  return (
    <header className="border-b border-(--aubay-warmgrey) bg-(--aubay-white) px-4 py-4 md:px-8">
      <div className="flex items-center justify-between md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-3 md:block">
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white) text-(--aubay-black) hover:bg-gray-50 md:hidden"
            aria-label="Abrir menu"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("portal:toggle-sidebar"));
            }}
          >
            <i className="fa-solid fa-bars" aria-hidden />
          </button>
          <h2 className="truncate text-xl font-semibold tracking-[-0.02em] text-(--aubay-black) md:text-2xl">
            {title}
          </h2>
          {subtitle ? <p className="mt-1 hidden text-sm text-(--aubay-grey) md:block">{subtitle}</p> : null}
        </div>
        <Link
          href="/profile"
          aria-label="Ir para o perfil"
          className="flex shrink-0 items-center space-x-3 md:border-l md:border-(--aubay-warmgrey) md:pl-4"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--aubay-orange) text-sm font-semibold text-white">
            {displayInitials}
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-(--aubay-black)">{displayName}</p>
            <p className="text-xs font-semibold tracking-[.14em] uppercase text-(--aubay-grey)">
              ID: {displayId}
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}

