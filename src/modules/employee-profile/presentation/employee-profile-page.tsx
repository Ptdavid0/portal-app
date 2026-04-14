"use client";

import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import { employeeProfileQuery } from "@/modules/employee-profile/application/employee-profile.queries";
import { AubayDataForm } from "@/modules/employee-profile/presentation/aubay-data-form";
import type { AubayDataFormValues } from "@/modules/employee-profile/schemas/aubay-data.schema";
import { PrivateHeader } from "@/shared/ui/private-header";

export function EmployeeProfilePage() {
  const { data } = useQuery(employeeProfileQuery());
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);

  const aubayInitialValues = useMemo<AubayDataFormValues | null>(() => {
    if (!data) return null;
    return {
      category: data.aubay.category,
      functionalArea: data.aubay.functionalArea,
      experienceLevel: data.aubay.experienceLevel,
    };
  }, [data]);

  if (!data || !aubayInitialValues) {
    return (
      <div>
        <PrivateHeader
          title="Dados do colaborador"
          subtitle="Informações pessoais"
          identityLoading
        />
        <div className="p-8">
          <div className="rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white) p-6 text-sm text-(--aubay-grey)">
            A carregar…
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PrivateHeader
        title="Dados do colaborador"
        subtitle="Informações pessoais"
        identity={{ fullName: data.fullName, id: data.id }}
      />

      <div className="p-8">
        {lastSavedAt ? (
          <div className="mb-6 rounded-(--radius) border border-(--aubay-warmgrey) bg-[#FEF0EB] px-4 py-3 text-sm text-(--aubay-black)">
            Alterações guardadas às{" "}
            <span className="font-semibold">
              {lastSavedAt.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })}
            </span>
            .
          </div>
        ) : null}

        <section className="mb-6 rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white)">
          <div className="flex items-center justify-between border-b border-(--aubay-warmgrey) px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                <i className="fa-solid fa-user text-(--profile-section-icon-fg)" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-(--aubay-black)">
                  Dados pessoais
                </h3>
              </div>
            </div>
            <button
              type="button"
              className="rounded-(--radius) bg-(--aubay-orange) px-4 py-2 text-sm font-bold text-white transition hover:opacity-95"
            >
              <i className="fa-solid fa-pen mr-2" aria-hidden />
              Editar
            </button>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Nome</label>
                    <input
                      type="text"
                      value={data.personal.name}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">ID único</label>
                    <input
                      type="text"
                      value={data.personal.uniqueId}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Data de admissão</label>
                    <input
                      type="text"
                      value={data.personal.admissionDate}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Data de nascimento</label>
                    <input
                      type="text"
                      value={data.personal.birthDate}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Nacionalidade</label>
                    <input
                      type="text"
                      value={data.personal.nationality}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Morada de correspondência</label>
                    <textarea
                      rows={3}
                      value={data.personal.correspondenceAddress}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">País</label>
                    <input
                      type="text"
                      value={data.personal.country}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Código Postal</label>
                    <input
                      type="text"
                      value={data.personal.postalCode}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Localidade</label>
                    <input
                      type="text"
                      value={data.personal.locality}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Distrito</label>
                    <input
                      type="text"
                      value={data.personal.district}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Concelho</label>
                    <input
                      type="text"
                      value={data.personal.county}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Freguesia</label>
                    <input
                      type="text"
                      value={data.personal.parish}
                      readOnly
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="mb-6 rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white)">
          <div className="flex items-center justify-between border-b border-(--aubay-warmgrey) px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                <i className="fa-solid fa-briefcase text-(--profile-section-icon-fg)" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-(--aubay-black)">
                  Dados Profissionais
                </h3>
                <p className="text-xs text-(--aubay-grey)">Informações principais do colaborador</p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-(--radius) bg-(--aubay-orange) px-4 py-2 text-sm font-bold text-white transition hover:opacity-95"
            >
              <i className="fa-solid fa-pen mr-2" aria-hidden />
              Editar
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Email Corporativo
                </label>
                <input
                  type="email"
                  value={data.corporateEmail}
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Gestor de Negócio
                </label>
                <input
                  type="text"
                  value={data.businessManager}
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Unidade de Negócio
                </label>
                <input
                  type="text"
                  value={data.businessUnit}
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Local de Trabalho
                </label>
                <input
                  type="text"
                  value={data.workplace}
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Função Atual
                </label>
                <input
                  type="text"
                  value={data.currentRole}
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Tecnologia Atual
                </label>
                <input
                  type="text"
                  value={data.currentTechStack}
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">Metodologia</label>
                <input
                  type="text"
                  value={data.methodology}
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div className="md:col-span-3">
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Tecnologias Preferidas
                </label>
                <div className="flex flex-wrap gap-2">
                  {data.preferredTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#FEF0EB] px-3 py-1.5 text-sm font-semibold text-(--aubay-orange)"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6 rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white)">
          <div className="flex items-center justify-between border-b border-(--aubay-warmgrey) px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                <i className="fa-solid fa-building text-(--profile-section-icon-fg)" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-(--aubay-black)">
                  Dados Aubay
                </h3>
                <p className="text-xs text-(--aubay-grey)">Informações organizacionais</p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-(--radius) bg-(--aubay-orange) px-4 py-2 text-sm font-bold text-white transition hover:opacity-95"
            >
              <i className="fa-solid fa-pen mr-2" aria-hidden />
              Editar
            </button>
          </div>
          <div className="p-6">
            <AubayDataForm
              initialValues={aubayInitialValues}
              onSave={(values) => {
                // Placeholder: later this becomes a mutation (TanStack Query).
                // For now, we just confirm that RHF + Zod validation is wired.
                console.log("Aubay data submitted", values);
                setLastSavedAt(new Date());
              }}
            />
          </div>
        </section>

        <section className="mb-6 rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white)">
          <div className="flex items-center justify-between border-b border-(--aubay-warmgrey) px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                <i className="fa-solid fa-address-book text-(--profile-section-icon-fg)" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-(--aubay-black)">
                  Contactos
                </h3>
                <p className="text-xs text-(--aubay-grey)">Meios de comunicação</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                className="rounded-(--radius) bg-gray-100 px-4 py-2 text-sm font-bold text-(--aubay-black) transition hover:bg-gray-200"
              >
                <i className="fa-solid fa-plus mr-2" aria-hidden />
                Adicionar
              </button>
              <button
                type="button"
                className="rounded-(--radius) bg-(--aubay-orange) px-4 py-2 text-sm font-bold text-white transition hover:opacity-95"
              >
                <i className="fa-solid fa-pen mr-2" aria-hidden />
                Editar
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                  <i className="fa-solid fa-phone text-(--profile-section-icon-fg)" aria-hidden />
                </div>
                <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-700">Tipo</label>
                    <select className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-white px-3 py-2 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)">
                      <option selected>Telefone</option>
                      <option>Email</option>
                      <option>Skype</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-700">Valor</label>
                    <input
                      type="text"
                      defaultValue="+351 912 345 678"
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-white px-3 py-2 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-700">
                      Preferido
                    </label>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" defaultChecked className="peer sr-only" />
                      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-(--aubay-orange) peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FEF0EB]" />
                    </label>
                  </div>
                </div>
                <button type="button" className="rounded-lg p-2 text-red-600 hover:bg-red-50">
                  <i className="fa-solid fa-trash" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6 rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white)">
          <div className="flex items-center justify-between border-b border-(--aubay-warmgrey) px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                <i className="fa-solid fa-phone-volume text-(--profile-section-icon-fg)" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-(--aubay-black)">
                  Contactos de Emergência
                </h3>
                <p className="text-xs text-(--aubay-grey)">
                  Pessoas para contactar em caso de emergência
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                className="rounded-(--radius) bg-gray-100 px-4 py-2 text-sm font-bold text-(--aubay-black) transition hover:bg-gray-200"
              >
                <i className="fa-solid fa-plus mr-2" aria-hidden />
                Adicionar
              </button>
              <button
                type="button"
                className="rounded-(--radius) bg-(--aubay-orange) px-4 py-2 text-sm font-bold text-white transition hover:opacity-95"
              >
                <i className="fa-solid fa-pen mr-2" aria-hidden />
                Editar
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Nome</label>
                    <input
                      type="text"
                      defaultValue="Maria Silva"
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-white px-3 py-2 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">
                      Relação
                    </label>
                    <select className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-white px-3 py-2 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)">
                      <option selected>Cônjuge</option>
                      <option>Pai/Mãe</option>
                      <option>Filho/Filha</option>
                      <option>Irmão/Irmã</option>
                      <option>Amigo/Amiga</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+351 916 789 012"
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-white px-3 py-2 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">Email</label>
                    <input
                      type="email"
                      defaultValue="maria.silva@email.com"
                      className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-white px-3 py-2 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                    />
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <button type="button" className="rounded-lg p-2 text-red-600 hover:bg-red-50">
                    <i className="fa-solid fa-trash mr-1" aria-hidden />
                    Remover
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6 rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white)">
          <div className="flex items-center justify-between border-b border-(--aubay-warmgrey) px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                <i className="fa-solid fa-file-invoice text-(--profile-section-icon-fg)" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-(--aubay-black)">
                  Dados Fiscais
                </h3>
                <p className="text-xs text-(--aubay-grey)">Informações tributárias e bancárias</p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-(--radius) bg-(--aubay-orange) px-4 py-2 text-sm font-bold text-white transition hover:opacity-95"
            >
              <i className="fa-solid fa-pen mr-2" aria-hidden />
              Editar
            </button>
          </div>
          <div className="p-6">
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  NIF (Número de Identificação Fiscal)
                </label>
                <input
                  type="text"
                  defaultValue="123 456 789"
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  NISS (Número de Identificação de Segurança Social)
                </label>
                <input
                  type="text"
                  defaultValue="12345678901"
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">IBAN</label>
                <input
                  type="text"
                  defaultValue="PT50 0002 0123 1234 5678 9015 4"
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">SWIFT/BIC</label>
                <input
                  type="text"
                  defaultValue="BBPIPTPL"
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Percentagem de Deficiência
                </label>
                <input
                  type="text"
                  defaultValue="0%"
                  readOnly
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div className="flex items-center">
                <label className="flex cursor-pointer items-center">
                  <input type="checkbox" defaultChecked className="peer sr-only" />
                  <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-(--aubay-orange) peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FEF0EB]" />
                  <span className="ml-3 text-sm font-semibold text-gray-700">
                    Morada fiscal igual à de correspondência
                  </span>
                </label>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-700">Morada Fiscal</label>
              <textarea
                rows={3}
                readOnly
                defaultValue={"Rua das Flores, 123, 4º Andar\n1200-195 Lisboa\nPortugal"}
                className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
              />
            </div>
          </div>
        </section>

        <section className="mb-6 rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white)">
          <div className="flex items-center justify-between border-b border-(--aubay-warmgrey) px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                <i className="fa-solid fa-id-card text-(--profile-section-icon-fg)" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-(--aubay-black)">
                  Documento de Identificação
                </h3>
                <p className="text-xs text-(--aubay-grey)">Informações do documento oficial</p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-(--radius) bg-(--aubay-orange) px-4 py-2 text-sm font-bold text-white transition hover:opacity-95"
            >
              <i className="fa-solid fa-pen mr-2" aria-hidden />
              Editar
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Tipo de Documento
                </label>
                <select className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)">
                  <option selected>Cartão de Cidadão</option>
                  <option>Passaporte</option>
                  <option>Bilhete de Identidade</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold text-gray-700">Número</label>
                <input
                  type="text"
                  readOnly
                  defaultValue="12345678 9 ZZ0"
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Data de Validade
                </label>
                <input
                  type="date"
                  readOnly
                  defaultValue="2028-12-31"
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="mb-2 block text-xs font-semibold text-gray-700">País Emissor</label>
              <select className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)">
                <option selected>Portugal</option>
                <option>Brasil</option>
                <option>Espanha</option>
                <option>França</option>
              </select>
            </div>
          </div>
        </section>

        <section className="mb-6 rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white)">
          <div className="flex items-center justify-between border-b border-(--aubay-warmgrey) px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                <i className="fa-solid fa-users text-(--profile-section-icon-fg)" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-(--aubay-black)">
                  Condição Fiscal
                </h3>
                <p className="text-xs text-(--aubay-grey)">Estado civil e dependentes</p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-(--radius) bg-(--aubay-orange) px-4 py-2 text-sm font-bold text-white transition hover:opacity-95"
            >
              <i className="fa-solid fa-pen mr-2" aria-hidden />
              Editar
            </button>
          </div>
          <div className="p-6">
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-4">
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">Estado Civil</label>
                <select className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)">
                  <option>Solteiro(a)</option>
                  <option selected>Casado(a)</option>
                  <option>Divorciado(a)</option>
                  <option>Viúvo(a)</option>
                  <option>União de Facto</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Número de Titulares
                </label>
                <select className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)">
                  <option>1</option>
                  <option selected>2</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Primeiro Ano de Trabalho
                </label>
                <input
                  type="number"
                  readOnly
                  defaultValue="2015"
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Número de Dependentes
                </label>
                <input
                  type="number"
                  readOnly
                  defaultValue="2"
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs font-semibold text-gray-700">
                Datas de Nascimento dos Dependentes
              </label>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 rounded-lg border border-gray-200 bg-gray-50 p-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                    <span className="text-sm font-semibold text-(--profile-section-icon-fg)">1</span>
                  </div>
                  <input
                    type="date"
                    defaultValue="2015-06-15"
                    className="flex-1 rounded-(--radius) border border-(--aubay-warmgrey) bg-white px-4 py-2 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                  />
                  <button type="button" className="rounded-lg p-2 text-red-600 hover:bg-red-50">
                    <i className="fa-solid fa-trash" aria-hidden />
                  </button>
                </div>
                <div className="flex items-center space-x-3 rounded-lg border border-gray-200 bg-gray-50 p-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                    <span className="text-sm font-semibold text-(--profile-section-icon-fg)">2</span>
                  </div>
                  <input
                    type="date"
                    defaultValue="2018-03-22"
                    className="flex-1 rounded-(--radius) border border-(--aubay-warmgrey) bg-white px-4 py-2 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                  />
                  <button type="button" className="rounded-lg p-2 text-red-600 hover:bg-red-50">
                    <i className="fa-solid fa-trash" aria-hidden />
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="mt-3 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
              >
                <i className="fa-solid fa-plus mr-2" aria-hidden />
                Adicionar Dependente
              </button>
            </div>
          </div>
        </section>

        <section className="mb-6 rounded-(--radius) border border-(--aubay-warmgrey) bg-(--aubay-white)">
          <div className="flex items-center justify-between border-b border-(--aubay-warmgrey) px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--profile-section-icon-bg)">
                <i className="fa-solid fa-building-columns text-(--profile-section-icon-fg)" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-(--aubay-black)">
                  Dados Fiscais da Empresa
                </h3>
                <p className="text-xs text-(--aubay-grey)">Informações da entidade empregadora</p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-(--radius) bg-(--aubay-orange) px-4 py-2 text-sm font-bold text-white transition hover:opacity-95"
            >
              <i className="fa-solid fa-pen mr-2" aria-hidden />
              Editar
            </button>
          </div>
          <div className="p-6">
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  NIF da Empresa
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue="501 234 567"
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Segurança Social da Empresa
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue="20123456789"
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue="Aubay Portugal, S.A."
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">Gerente</label>
                <input
                  type="text"
                  readOnly
                  defaultValue="Carlos Mendes"
                  className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-700">
                Morada da Empresa
              </label>
              <textarea
                rows={3}
                readOnly
                defaultValue={"Avenida da Liberdade, 110\n1269-046 Lisboa\nPortugal"}
                className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
              />
            </div>
          </div>
        </section> */}

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="rounded-lg bg-gray-100 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-200"
          >
            Cancelar Alterações
          </button>
          <button
            type="button"
            className="rounded-(--radius) bg-(--aubay-orange) px-6 py-3 font-semibold text-white transition hover:opacity-95"
            onClick={() => setLastSavedAt(new Date())}
          >
            <i className="fa-solid fa-save mr-2" aria-hidden />
            Guardar Todas as Alterações
          </button>
        </div>
      </div>
    </div>
  );
}

