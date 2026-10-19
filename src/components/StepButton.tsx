import type { ButtonHTMLAttributes } from "react";
import IconMinus from "@/components/IconMinus";
import IconPlus from "@/components/IconPlus";

type StepButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  icon: "minus" | "plus";
};

// Figma: StepButton (node 2168:1020)
// Stepper의 −/+ 버튼. 더 못 줄이면 disabled 속성을 준다.
export default function StepButton({ icon, type = "button", disabled, ...props }: StepButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="flex size-[44px] shrink-0 items-center justify-center overflow-hidden rounded-control border border-border-default bg-surface-default"
      {...props}
    >
      {icon === "minus" ? <IconMinus size={20} disabled={disabled} /> : <IconPlus size={20} />}
    </button>
  );
}
