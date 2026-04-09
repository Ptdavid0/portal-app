"use client";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  // Placeholder until real auth (e.g. MSAL) is integrated.
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="max-w-md rounded-xl border border-gray-200 bg-white p-6">
          <h1 className="text-lg font-bold text-gray-900">Sessão necessária</h1>
          <p className="mt-2 text-sm text-gray-600">
            A autenticação real será integrada numa fase seguinte.
          </p>
        </div>
      </div>
    );
  }

  return children;
}

