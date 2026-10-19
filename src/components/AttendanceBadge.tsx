type AttendanceBadgeProps = {
  // yes: 참석 / no: 불참 (DB의 참석 여부 값과 맞춘다)
  status?: "yes" | "no";
};

// Figma: AttendanceBadge (node 2168:972)
export default function AttendanceBadge({ status = "yes" }: AttendanceBadgeProps) {
  const isYes = status === "yes";
  return (
    <span
      className={`inline-flex shrink-0 items-start whitespace-nowrap rounded-pill px-control-compact py-inline-sm text-label-md ${
        isYes ? "bg-info-subtle text-info-strong" : "bg-background-subtle text-text-secondary"
      }`}
    >
      {isYes ? "참석" : "불참"}
    </span>
  );
}
