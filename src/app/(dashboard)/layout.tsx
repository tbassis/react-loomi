import Image from "next/image";

import { Montserrat } from "next/font/google";
import { TopBar } from "@/components/ui/top-bar";
import { SideBar } from "@/components/ui/side-bar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat-dashboard",
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${montserrat.className} relative min-h-screen bg-gray-100`}>
      <TopBar />

      <SideBar />

      {/* Content */}
      <main className="min-h-screen pt-20 pl-40 overflow-auto bg-background">{children}</main>
    </div>
  );
}
