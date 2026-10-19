type StatCardProps = {
  label: string;
  value: string;
  // 강조할 합계(참석 인원 합계)에만 켠다
  highlight?: boolean;
};

// Figma: StatCard (node 2168:993)
export default function StatCard({ label, value, highlight = false }: StatCardProps) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-inline-sm overflow-hidden rounded-card px-control-x py-stack-md ${
        highlight ? "bg-info-subtle" : "bg-surface-subtle"
      }`}
    >
      <p className="text-caption-md text-text-secondary">{label}</p>
      <p className={`text-title-lg ${highlight ? "text-info-strong" : "text-text-strong"}`}>
        {value}
      </p>
    </div>
  );
}
