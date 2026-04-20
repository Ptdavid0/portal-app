import { Inter } from "next/font/google";

import { TimesheetNovaClient } from "./timesheet-nova-client";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Page() {
  return <TimesheetNovaClient className={inter.className} />;
}

