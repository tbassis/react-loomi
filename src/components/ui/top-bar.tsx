"use client";

import { usePathname } from "next/navigation";

export function TopBar() {
  const pathname = usePathname();

  const titleMap: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/ticket": "Gestão de Tickets",
  };

  const title = titleMap[pathname] ?? "";

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-on-background z-10">
      <div className={`h-full flex items-center px-6 `}>
        <h1 className="ml-50 text-xl font-semibold">{title}</h1>
      </div>
    </header>
  );
}
