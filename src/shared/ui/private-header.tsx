export function PrivateHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="border-b border-[var(--aubay-warmgrey)] bg-[var(--aubay-white)] px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black tracking-[-0.02em] text-[var(--aubay-black)]">
            {title}
          </h2>
          {subtitle ? <p className="mt-1 text-sm text-[var(--aubay-grey)]">{subtitle}</p> : null}
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="relative rounded-[var(--radius)] p-2 text-[var(--aubay-grey)] hover:bg-gray-100 hover:text-[var(--aubay-black)]"
          >
            <i className="fa-solid fa-bell text-xl" aria-hidden />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>
          <div className="flex items-center space-x-3 border-l border-[var(--aubay-warmgrey)] pl-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--aubay-orange)] text-sm font-bold text-white">
              JS
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--aubay-black)]">João Silva</p>
              <p className="text-xs font-bold tracking-[.14em] uppercase text-[var(--aubay-grey)]">
                ID: 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

