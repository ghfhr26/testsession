import NextImage from "next/image";

type IconCheckProps = {
  // 24: 기본 체크(회색) / 32: SuccessIcon 안의 체크(남색)
  size?: 24 | 32;
};

// Figma: icon/check (node 2168:1074)
export default function IconCheck({ size = 24 }: IconCheckProps) {
  const src = size === 32 ? "/icons/check-success.svg" : "/icons/check.svg";
  return <NextImage src={src} alt="" width={size} height={size} className="shrink-0" />;
}
