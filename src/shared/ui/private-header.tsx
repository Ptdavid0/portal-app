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
    <header className="border-b border-(--aubay-warmgrey) bg-(--aubay-white) px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-(--aubay-black)">
            {title}
          </h2>
          {subtitle ? <p className="mt-1 text-sm text-(--aubay-grey)">{subtitle}</p> : null}
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 border-l border-(--aubay-warmgrey) pl-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--aubay-orange) text-sm font-semibold text-white">
              {displayInitials}
            </div>
            <div>
              <p className="text-sm font-semibold text-(--aubay-black)">{displayName}</p>
              <p className="text-xs font-semibold tracking-[.14em] uppercase text-(--aubay-grey)">
                ID: {displayId}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

