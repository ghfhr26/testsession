import type { TextareaHTMLAttributes } from "react";

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

// Figma: TextareaField (node 2168:1067)
// 여러 줄 입력 박스. state는 InputField와 같다(default / focus / active).
// 높이는 className으로 정한다(Textarea에서 rows에 맞춰 넣어준다).
export default function TextareaField({ className, ...props }: TextareaFieldProps) {
  return (
    <textarea
      className={[
        "h-[45px] w-full resize-none rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
