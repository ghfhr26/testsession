import { useId, type InputHTMLAttributes } from "react";
import InputField from "@/components/InputField";
import Label from "@/components/Label";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helper?: string;
  showHelper?: boolean;
};

// Figma: Input (node 2168:1115)
// 라벨 + 한 줄 입력 박스 + 안내 문구. 일시·장소·이름처럼 한 줄 값에 쓴다.
// "필수" 표시는 required 속성을 따른다.
export default function Input({
  label,
  helper = "안내 문구",
  showHelper = false,
  id,
  required,
  ...props
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className="flex w-full flex-col items-start gap-inline-compact">
      <Label htmlFor={inputId} required={Boolean(required)}>
        {label}
      </Label>
      <InputField id={inputId} required={required} {...props} />
      {showHelper && <p className="w-full text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
