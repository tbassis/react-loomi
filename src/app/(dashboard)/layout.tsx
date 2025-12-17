import Image from "next/image";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat-dashboard",
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${montserrat.className} relative min-h-screen bg-gray-100`}>
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-on-background z-10">
        <div className="h-full flex items-center px-6">
          <h1 className="ml-50 text-xl font-semibold">Dashboard</h1>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-40 bg-on-background text-white rounded-r-[40px] z-20 justify-between shadow-[4px_0px_20px_0px_#00000033]">
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-center">
            <Image className="mt-10" src="/images/nortus.svg" width={40} height={40} alt="Logo" />
          </div>

          {/* <nav className="p-4 space-y-2">
            <a className="block rounded px-3 py-2 hover:bg-blue-600" href="#">
              Dashboard
            </a>
            <a className="block rounded px-3 py-2 hover:bg-blue-600" href="#">
              Tickets
            </a>
            <a className="block rounded px-3 py-2 hover:bg-blue-600" href="#">
              Usuário
            </a>
          </nav> */}

          <div className="mb-[80px] flex justify-center">
            <span className="w-[64px] h-[64px] mx-auto p-[20px] bg-primary rounded-full text-center font-semibold text-lg">
              UE
            </span>
          </div>
        </div>
      </aside>

      {/* Content */}
      <main className="min-h-screen pt-20 pl-40 overflow-auto bg-background">{children}</main>
    </div>
  );
}
