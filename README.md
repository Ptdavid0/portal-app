## Portal do Colaborador (Frontend)

Base inicial do portal do colaborador da Aubay.

### Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- TanStack Query
- React Hook Form + Zod

### Como correr

```bash
cd portal-app
npm install
npm run dev
```

Abrir `http://localhost:3000`.

### Arquitetura (enxuta, feature-first)

- `src/app`: rotas, layouts e providers globais
  - `src/app/(private)`: route group “privado” (a autenticação real será integrada depois)
- `src/modules`: módulos por feature/domínio (ex.: `employee-profile`, `home-dashboard`, `auth`)
  - `application`: queries/commands (caso exista necessidade real)
  - `domain`: types e regras de domínio (tipos/validações puras)
  - `infrastructure`: chamadas a APIs / integração (neste momento, placeholder)
  - `presentation`: UI (pages/components) e wiring com libs (Query/RHF)
- `src/shared`: utilitários e UI transversal, sem acoplar a features

### Como escalar sem overengineering

- Quando existir backend, mover o placeholder `getEmployeeProfile()` para integração real e criar mutations com TanStack Query.
- Manter schemas (Zod) em `schemas/` do módulo e tipos de domínio em `domain/`.
- Evitar “camadas por camadas”: só criar `application/infrastructure` quando houver lógica/integração real.
