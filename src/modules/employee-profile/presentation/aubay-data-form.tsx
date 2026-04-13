"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { AubayDataFormValues } from "@/modules/employee-profile/schemas/aubay-data.schema";
import { aubayDataSchema } from "@/modules/employee-profile/schemas/aubay-data.schema";

export function AubayDataForm({
  initialValues,
  onSave,
}: {
  initialValues: AubayDataFormValues;
  onSave: (values: AubayDataFormValues) => void;
}) {
  const form = useForm<AubayDataFormValues>({
    resolver: zodResolver(aubayDataSchema),
    defaultValues: initialValues,
    mode: "onTouched",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-700">Categoria</label>
          <select
            {...register("category")}
            className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
          >
            <option>Colaborador Permanente</option>
            <option>Consultor</option>
            <option>Gestor</option>
          </select>
          {errors.category ? (
            <p className="mt-2 text-xs font-medium text-red-600">{errors.category.message}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-700">Área Funcional</label>
          <select
            {...register("functionalArea")}
            className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
          >
            <option>Desenvolvimento de Software</option>
            <option>Infraestrutura</option>
            <option>Análise de Negócio</option>
            <option>Quality Assurance</option>
          </select>
          {errors.functionalArea ? (
            <p className="mt-2 text-xs font-medium text-red-600">{errors.functionalArea.message}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-700">Nível de Experiência</label>
          <select
            {...register("experienceLevel")}
            className="w-full rounded-(--radius) border border-(--aubay-warmgrey) bg-gray-50 px-4 py-2.5 text-sm text-(--aubay-black) focus:border-transparent focus:ring-2 focus:ring-(--aubay-orange)"
          >
            <option>Júnior</option>
            <option>Pleno</option>
            <option>Sênior</option>
            <option>Especialista</option>
          </select>
          {errors.experienceLevel ? (
            <p className="mt-2 text-xs font-medium text-red-600">{errors.experienceLevel.message}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting || !isDirty}
          className="inline-flex items-center rounded-(--radius) bg-(--aubay-orange) px-6 py-3 font-semibold text-white hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <i className="fa-solid fa-save mr-2" aria-hidden />
          Guardar Alterações
        </button>
      </div>
    </form>
  );
}

