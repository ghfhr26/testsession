import type { ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
  // 켜면 "필수" 표시가 붙는다
  required?: boolean;
  // 연결할 입력칸 id. 있으면 <label>, 없으면 <span>으로 그린다.
  htmlFor?: string;
};

// Figma: Label (node 2168:1076)
export default function Label({ children, required = true, htmlFor }: LabelProps) {
  const content = (
    <>
      <span className="text-label-lg text-text-strong">{children}</span>
      {required && <span className="text-caption-md text-feedback-error">필수</span>}
    </>
  );
  const className = "flex items-center gap-inline-sm whitespace-nowrap";

  if (htmlFor) {
    return (
      <label htmlFor={htmlFor} className={className}>
        {content}
      </label>
    );
  }
  return <span className={className}>{content}</span>;
}
