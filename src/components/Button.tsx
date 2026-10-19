import type { ButtonHTMLAttributes } from "react";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
};

// Figma: Button (node 2168:1089)
// hover 상태는 마우스를 올렸을 때, disabled 상태는 disabled 속성으로 표현한다.
const baseClass =
  "inline-flex items-center justify-center whitespace-nowrap rounded-control px-control-y text-center text-text-inverse disabled:bg-border-subtle";

const sizeClass: Record<ButtonSize, string> = {
  sm: "gap-control-compact py-inline-sm text-label-md bg-action-primary enabled:hover:bg-action-hover-overlay",
  // md는 회색 배경 위에 hover 색을 한 겹 덮는다 (Figma와 같은 방식)
  md: "h-[48px] gap-inline-compact py-control-x text-label-md bg-text-secondary enabled:hover:bg-[linear-gradient(var(--color-action-hover-overlay),var(--color-action-hover-overlay))]",
  lg: "h-[52px] gap-control-compact py-inline-sm text-label-lg bg-action-primary enabled:hover:bg-action-hover-overlay",
};

export default function Button({
  size = "sm",
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[baseClass, sizeClass[size], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
