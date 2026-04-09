import { queryOptions } from "@tanstack/react-query";

import { getEmployeeProfile } from "@/modules/employee-profile/infrastructure/employee-profile.api";

export const employeeProfileQuery = () =>
  queryOptions({
    queryKey: ["employee-profile"],
    queryFn: getEmployeeProfile,
  });

