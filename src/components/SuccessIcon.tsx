import IconCheck from "@/components/IconCheck";

// Figma: SuccessIcon (node 2168:1006)
// 완료 표시 아이콘. 발행 완료·참석 신청 완료 상태에서 쓴다.
export default function SuccessIcon() {
  return (
    <div className="flex size-[64px] shrink-0 items-center justify-center overflow-hidden rounded-pill bg-info-subtle">
      <IconCheck size={32} />
    </div>
  );
}
