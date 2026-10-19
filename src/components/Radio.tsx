type RadioState = "default" | "selected" | "disabled";

type RadioProps = {
  state?: RadioState;
};

const outerClass: Record<RadioState, string> = {
  default: "bg-text-tertiary",
  selected: "bg-action-primary",
  disabled: "bg-text-disabled",
};

// Figma: Radio (node 2168:1079)
// 모양만 그리는 컴포넌트. 실제 선택 기능은 RadioOption의 <input type="radio">가 맡는다.
export default function Radio({ state = "default" }: RadioProps) {
  return (
    <span aria-hidden className="flex size-[48px] shrink-0 items-center justify-center">
      <span
        className={`flex size-[20px] items-center justify-center rounded-pill ${outerClass[state]}`}
      >
        <span
          className={`rounded-pill bg-surface-default ${state === "selected" ? "size-[8px]" : "size-[16px]"}`}
        />
      </span>
    </span>
  );
}
