export function DashboardLoading() {
  return (
    <div className="min-h-full flex flex-col items-center pt-[56px]">
      <div className="flex flex-col gap-10 w-4/5 max-w-[1370px] mx-auto animate-pulse">
        {/* KPIs */}
        <div className="flex w-full gap-10">
          {/* Card grande */}
          <div className="w-3/5 bg-on-background rounded-[24px] p-6 pt-9">
            <div className="flex justify-between mb-6">
              <div className="h-6 w-48 bg-gray-700 rounded" />
              <div className="flex gap-2">
                <div className="h-8 w-20 bg-gray-700 rounded-full" />
                <div className="h-8 w-20 bg-gray-700 rounded-full" />
                <div className="h-8 w-20 bg-gray-700 rounded-full" />
              </div>
            </div>

            <div className="h-[260px] bg-gray-700 rounded-xl" />
          </div>

          {/* Card pequeno */}
          <div className="w-2/5 bg-on-background rounded-[24px] p-6 pt-9">
            <div className="h-6 w-40 bg-gray-700 rounded mb-6" />
            <div className="h-[260px] bg-gray-700 rounded-xl" />
          </div>
        </div>

        {/* MAPA */}
        <div className="w-full bg-on-background rounded-[24px] p-6 pt-9">
          <div className="h-6 w-64 bg-gray-700 rounded mb-6" />
          <div className="h-[354px] bg-gray-700 rounded-[16px]" />
        </div>
      </div>
    </div>
  );
}
