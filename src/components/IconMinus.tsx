import NextImage from "next/image";

type IconMinusProps = {
  // 24: 기본 / 20: StepButton 안에서 쓰는 크기
  size?: 24 | 20;
  // StepButton이 disabled일 때 쓰는 회색 아이콘 (size 20에서만 Figma에 있음)
  disabled?: boolean;
};

// Figma: icon/minus (node 2168:1018)
export default function IconMinus({ size = 24, disabled = false }: IconMinusProps) {
  let src = "/icons/minus.svg";
  if (size === 20) {
    src = disabled ? "/icons/minus-20-disabled.svg" : "/icons/minus-20.svg";
  }
  return <NextImage src={src} alt="" width={size} height={size} className="shrink-0" />;
}
