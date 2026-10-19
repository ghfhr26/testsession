import type { InputHTMLAttributes } from "react";
import Label from "@/components/Label";
import Radio from "@/components/Radio";

type RadioOptionProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

// Figma: RadioOption (node 2168:1119)
// 라디오 + 라벨 한 줄. 참석/불참 선택에 쓴다.
// 진짜 라디오 입력칸은 화면에서 숨기고, 모양은 Radio 컴포넌트로 그린다.
export default function RadioOption({ label, checked, disabled, ...props }: RadioOptionProps) {
  const state = disabled ? "disabled" : checked ? "selected" : "default";
  return (
    <label className="flex min-w-0 flex-1 cursor-pointer items-center">
      <input type="radio" className="sr-only" checked={checked} disabled={disabled} {...props} />
      <Radio state={state} />
      <Label required={false}>{label}</Label>
    </label>
  );
}
