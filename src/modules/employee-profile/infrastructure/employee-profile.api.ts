import type { EmployeeProfile } from "@/modules/employee-profile/domain/employee-profile.types";

const employeeProfile: EmployeeProfile = {
  id: "12345",
  fullName: "João Silva",
  personal: {
    preferredName: "-",
    uniqueId: "23511",
    admissionDate: "14-12-2020",
    birthDate: "24-01-1990",
    gender: "-",
    nationality: "Portuguesa",
    communicationLanguage: "Português",
    permissionType: "Português",
    birthCountry: "-",
    birthDistrict: "-",
    birthCounty: "-",
    educationLevel: "-",
    hasDriversLicense: "-",
    correspondenceAddress: "Rua Adalcino Bragado, 3, r/c esquerdo.\n7005-430 Évora",
    country: "Portugal",
    postalCode: "7005-430",
    locality: "-",
    district: "Évora",
    county: "-",
    parish: "-",
  },
  corporateEmail: "joao.silva@company.com",
  businessManager: "Maria Santos",
  businessUnit: "Tecnologia e Inovação",
  workplace: "Lisboa - Sede",
  behavioralReview: "Excelente",
  technicalReview: "Muito Bom",
  currentRole: "Desenvolvedor Full Stack Senior",
  currentTechStack: "React, Node.js, PostgreSQL",
  methodology: "Agile - Scrum",
  preferredTechnologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
  aubay: {
    category: "Gestor",
    functionalArea: "Desenvolvimento de Software",
    experienceLevel: "Sênior",
  },
};

export async function getEmployeeProfile(): Promise<EmployeeProfile> {
  // Placeholder until backend integration exists.
  return employeeProfile;
}

