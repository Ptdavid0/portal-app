export type EmployeeProfile = {
  id: string;
  fullName: string;
  corporateEmail: string;
  businessManager: string;
  businessUnit: string;
  workplace: string;
  behavioralReview: string;
  technicalReview: string;
  currentRole: string;
  currentTechStack: string;
  methodology: string;
  preferredTechnologies: string[];
  aubay: {
    category: "Colaborador Permanente" | "Consultor" | "Gestor";
    functionalArea:
      | "Desenvolvimento de Software"
      | "Infraestrutura"
      | "Análise de Negócio"
      | "Quality Assurance";
    experienceLevel: "Júnior" | "Pleno" | "Sênior" | "Especialista";
  };
};

