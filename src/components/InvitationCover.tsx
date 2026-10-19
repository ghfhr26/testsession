import Image from "@/components/Image";
import SectionHeader from "@/components/SectionHeader";

type InvitationCoverProps = {
  subtitle?: string;
  // 줄바꿈(\n)을 넣으면 화면에서도 줄이 바뀐다
  title: string;
  date: string;
  location: string;
};

// Figma: InvitationCover (node 2168:982)
// 초대장 상단 커버. /create 미리보기와 /i/[id]에서 같은 컴포넌트를 쓴다.
export default function InvitationCover({ subtitle, title, date, location }: InvitationCoverProps) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-page-horizontal overflow-hidden bg-linear-to-b from-cover-gradient-from to-cover-gradient-to px-page-horizontal py-cover-inset">
      <SectionHeader
        inverse
        subtitle={subtitle}
        showSubtitle={Boolean(subtitle)}
        title={title}
        showDescription={false}
      />
      <Image type="character" alt="" />
      <CoverDetail label="일시" value={date} />
      <CoverDetail label="장소" value={location} />
    </section>
  );
}

// 일시·장소 한 묶음 (작은 라벨 + 내용)
function CoverDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-inline-md">
      <span className="rounded-control bg-info-subtle px-inline-compact py-inline-xs text-caption-md font-semibold whitespace-nowrap text-info-strong">
        {label}
      </span>
      <p className="w-full text-center text-label-md whitespace-pre-line text-text-inverse">
        {value}
      </p>
    </div>
  );
}
