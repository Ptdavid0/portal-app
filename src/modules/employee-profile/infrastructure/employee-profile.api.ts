import type { EmployeeProfile } from "@/modules/employee-profile/domain/employee-profile.types";

const employeeProfile: EmployeeProfile = {
  id: "12345",
  fullName: "João Silva",
  personal: {
    name: "João Silva da Costa",
    uniqueId: "02020",
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
    correspondenceAddress: "Avenida da Liberdade, 33, R/c.\n1070-00 Lisboa",
    country: "Portugal",
    postalCode: "1070-000",
    locality: "Lisboa",
    district: "Lisboa",
    county: "Lisboa",
    parish: "Santo António",
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
    category: "Colaborador Permanente",
    functionalArea: "Desenvolvimento de Software",
    experienceLevel: "Sênior",
  },
};

export async function getEmployeeProfile(): Promise<EmployeeProfile> {
  // Placeholder until backend integration exists.
  return employeeProfile;
}

