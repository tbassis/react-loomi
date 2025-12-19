import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  if (!token) {
    redirect("/login");
  }

  return (
    <div className="min-h-full flex flex-col items-center justify-center pt-[56px]">
      <div className="flex flex-col items-center gap-10 w-4/5 max-w-[1370px] mx-auto">
        <div className="flex gap-6 ">
          <div className="flex flex-col gap-7 p-5 bg-[#FFFFFF0D] rounded-2xl">
            <p className="text-sm font-normal">Tickets Abertos</p>
            <div className="flex justify-between">
              <span className="text-[32px] font-bold">15</span>
              <Image src="images/open-ticket.svg" alt="Open Ticket" width={32} height={32} />
            </div>
          </div>
          <div className="flex flex-col gap-7 p-5 bg-[#FFFFFF0D] rounded-2xl">
            <p className="text-sm font-normal">Em andamento</p>
            <div className="flex justify-between">
              <span className="text-[32px] font-bold">15</span>
              <Image
                src="images/progress-ticket.svg"
                alt="Progress Ticket"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="flex flex-col gap-7 p-5 bg-[#FFFFFF0D] rounded-2xl">
            <p className="text-sm font-normal">Resolveidos hoje</p>
            <div className="flex justify-between">
              <span className="text-[32px] font-bold">15</span>
              <Image src="images/done-ticket.svg" alt="Done Ticket" width={32} height={32} />
            </div>
          </div>
          <div className="flex flex-col gap-7 p-5 bg-[#FFFFFF0D] rounded-2xl">
            <p className="text-sm font-normal">Tempo médio</p>
            <div className="flex justify-between">
              <span className="text-[32px] font-bold">15</span>
              <Image src="images/average-ticket.svg" alt="Average Ticket" width={32} height={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
