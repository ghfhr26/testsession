import type { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

// Figma: InputField (node 2168:1108)
// 한 줄 입력 박스. Figma의 state는 이렇게 표현된다.
// default: 빈 칸(placeholder 회색) / focus: 입력 중(파란 테두리) / active: 값이 채워짐(검은 글자)
export default function InputField({ type = "text", className, ...props }: InputFieldProps) {
  return (
    <input
      type={type}
      className={[
        "h-[45px] w-full rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
