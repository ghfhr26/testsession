import NextImage from "next/image";

type IconPlusProps = {
  // 24: 기본 / 20: StepButton 안에서 쓰는 크기
  size?: 24 | 20;
};

// Figma: icon/plus (node 2168:1016)
export default function IconPlus({ size = 24 }: IconPlusProps) {
  const src = size === 20 ? "/icons/plus-20.svg" : "/icons/plus.svg";
  return <NextImage src={src} alt="" width={size} height={size} className="shrink-0" />;
}
