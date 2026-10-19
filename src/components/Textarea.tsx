import { useId, type TextareaHTMLAttributes } from "react";
import Label from "@/components/Label";
import TextareaField from "@/components/TextareaField";

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "rows"> & {
  label: string;
  // 2: 제목(최대 2줄) / 4: 본문
  rows?: 2 | 4;
  helper?: string;
  showHelper?: boolean;
};

// Figma: Textarea (node 2168:1058)
// 라벨 + 여러 줄 입력 박스 + 안내 문구.
export default function Textarea({
  label,
  rows = 4,
  helper = "엔터로 줄을 나눌 수 있어요",
  showHelper = false,
  id,
  required,
  ...props
}: TextareaProps) {
  const autoId = useId();
  const textareaId = id ?? autoId;
  return (
    <div className="flex w-full flex-col items-start gap-inline-compact">
      <Label htmlFor={textareaId} required={Boolean(required)}>
        {label}
      </Label>
      <TextareaField
        id={textareaId}
        rows={rows}
        required={required}
        className={rows === 2 ? "h-[72px]" : "h-[120px]"}
        {...props}
      />
      {showHelper && <p className="whitespace-nowrap text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
