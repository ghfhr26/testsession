import AttendanceBadge from "@/components/AttendanceBadge";

type ResponseRowProps = {
  name: string;
  // 동반 인원 등. 불참이면 동반 인원을 넣지 않는다.
  meta?: string;
  status: "yes" | "no";
};

// Figma: ResponseRow/true (node 2168:977)
// 응답 현황 목록 한 줄.
export default function ResponseRow({ name, meta, status }: ResponseRowProps) {
  return (
    <div className="flex h-[78px] w-full items-center gap-stack-sm rounded-card border border-border-subtle bg-surface-default p-stack-md">
      <div className="flex min-w-0 flex-1 flex-col items-start gap-inline-sm">
        <p className="w-full truncate text-label-lg text-text-primary">{name}</p>
        {meta && <p className="w-full truncate text-caption-md text-text-tertiary">{meta}</p>}
      </div>
      <AttendanceBadge status={status} />
    </div>
  );
}
