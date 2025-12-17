"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-full w-40 bg-on-background text-white rounded-r-[40px] z-20 justify-between shadow-[4px_0px_20px_0px_#00000033]">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-center">
          <Image className="mt-10" src="/images/nortus.svg" width={40} height={40} alt="Logo" />
        </div>

        <nav className="flex flex-col gap-10">
          <Link
            className={`w-fit mx-auto px-[23px] py-[21px] rounded-[12px] transition-colors ${
              pathname === "/dashboard" ? "bg-primary" : "bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A]"
            }`}
            href="/dashboard"
          >
            <Image src="/images/dashboard.svg" width={24} height={24} alt="Dashboard icon" />
          </Link>
          <Link
            className={`w-fit mx-auto px-[23px] py-[21px] rounded-[12px] transition-colors ${
              pathname === "/ticket" ? "bg-primary" : "bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A]"
            }`}
            href="/ticket"
          >
            <Image src="/images/ticket.svg" width={24} height={24} alt="Ticket icon" />
          </Link>
        </nav>

        <div className="mb-[80px] flex justify-center">
          <span className="w-[64px] h-[64px] mx-auto p-[20px] bg-primary rounded-full text-center font-semibold text-lg">
            UE
          </span>
        </div>
      </div>
    </aside>
  );
}
