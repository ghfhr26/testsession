type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  showSubtitle?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  // 어두운 배경(InvitationCover) 위에서 쓸 때 켠다. 글자가 흰색이 된다.
  inverse?: boolean;
};

// Figma: SectionHeader (node 2168:1122)
// 제목·설명에 넣은 줄바꿈(\n)은 화면에서도 줄바꿈된다.
export default function SectionHeader({
  subtitle = "Subtitle",
  title = "title",
  description = "Description",
  showSubtitle = true,
  showTitle = true,
  showDescription = true,
  inverse = false,
}: SectionHeaderProps) {
  const textColor = inverse ? "text-text-inverse" : "text-text-primary";
  return (
    <div className="flex w-full flex-col items-center gap-stack-md text-center whitespace-pre-line">
      {showSubtitle && (
        <p
          className={`w-full text-label-md ${inverse ? "text-text-inverse opacity-60" : "text-action-secondary"}`}
        >
          {subtitle}
        </p>
      )}
      {showTitle && <p className={`w-full text-title-lg ${textColor}`}>{title}</p>}
      {showDescription && <p className={`w-full text-body-md ${textColor}`}>{description}</p>}
    </div>
  );
}
