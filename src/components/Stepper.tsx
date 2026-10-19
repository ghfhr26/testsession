"use client";

import { useState } from "react";
import StepButton from "@/components/StepButton";

type StepperProps = {
  // 폼으로 보낼 때 쓰는 이름 (숨은 입력칸에 값이 들어간다)
  name?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
};

// Figma: Stepper (node 2168:1025)
// 동반 인원 입력. 최솟값이면 − 버튼이 disabled가 된다.
export default function Stepper({ name, defaultValue = 0, min = 0, max, onChange }: StepperProps) {
  const [value, setValue] = useState(defaultValue);

  function change(next: number) {
    setValue(next);
    onChange?.(next);
  }

  const canDecrease = value > min;
  const canIncrease = max === undefined || value < max;

  return (
    <div className="flex items-center gap-stack-sm">
      <StepButton
        icon="minus"
        aria-label="인원 줄이기"
        disabled={!canDecrease}
        onClick={() => change(value - 1)}
      />
      <span aria-live="polite" className="whitespace-nowrap text-heading-md text-text-strong">
        {value}명
      </span>
      <StepButton
        icon="plus"
        aria-label="인원 늘리기"
        disabled={!canIncrease}
        onClick={() => change(value + 1)}
      />
      {name && <input type="hidden" name={name} value={value} />}
    </div>
  );
}
