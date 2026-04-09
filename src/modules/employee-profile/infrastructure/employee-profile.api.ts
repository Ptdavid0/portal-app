import type { EmployeeProfile } from "@/modules/employee-profile/domain/employee-profile.types";

const employeeProfile: EmployeeProfile = {
  id: "12345",
  fullName: "João Silva",
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

