export type EmployeeProfile = {
  id: string;
  fullName: string;
  personal: {
    name: string;
    uniqueId: string;
    admissionDate: string;
    birthDate: string;
    gender: string;
    nationality: string;
    communicationLanguage: string;
    permissionType: string;
    birthCountry: string;
    birthDistrict: string;
    birthCounty: string;
    educationLevel: string;
    hasDriversLicense: string;
    correspondenceAddress: string;
    country: string;
    postalCode: string;
    locality: string;
    district: string;
    county: string;
    parish: string;
  };
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

