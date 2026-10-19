type InfoRowProps = {
  label: string;
  value: string;
  // inline: 라벨과 값을 붙여서 / spread: 양끝 정렬
  type?: "inline" | "spread";
};

// Figma: InfoRow (node 2168:1008)
export default function InfoRow({ label, value, type = "inline" }: InfoRowProps) {
  if (type === "spread") {
    return (
      <div className="flex w-full items-center gap-control-compact">
        <span className="shrink-0 whitespace-nowrap text-body-md text-text-secondary">{label}</span>
        <span className="min-w-0 flex-1 text-right text-label-md text-text-strong">{value}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-control-compact">
      <span className="shrink-0 whitespace-nowrap text-label-lg text-text-secondary">{label}</span>
      <span aria-hidden className="h-[14px] w-px shrink-0 bg-border-default" />
      <span className="text-label-lg text-text-strong">{value}</span>
    </div>
  );
}
