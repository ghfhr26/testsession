import NextImage from "next/image";

type ImageProps = {
  type?: "character" | "flag";
  // 이미지 설명. 꾸밈용이면 빈 문자열("")을 넣는다.
  alt: string;
};

// Figma: Image (node 2168:1126)
// character: 201px 캐릭터 이미지 / flag: 48px 깃발 이미지
export default function Image({ type = "character", alt }: ImageProps) {
  if (type === "flag") {
    return (
      <div className="relative size-[48px] shrink-0 overflow-hidden rounded-scaled-media">
        <NextImage src="/images/flag.png" alt={alt} fill sizes="48px" className="object-cover" />
      </div>
    );
  }

  return (
    <div className="relative size-[201px] shrink-0">
      <NextImage src="/images/character.png" alt={alt} fill sizes="201px" className="object-cover" />
    </div>
  );
}
