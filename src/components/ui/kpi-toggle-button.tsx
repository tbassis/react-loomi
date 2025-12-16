"use client";

type KpiToggleButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function KpiToggleButton({ label, isActive, onClick }: KpiToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full px-4 py-2 text-xs font-semibold transition cursor-pointer
        ${isActive ? "bg-primary text-white" : "bg-[#F6F8FC1A] text-gray-300 hover:bg-[#F6F8FC33]"}
      `}
    >
      {label}
    </button>
  );
}
