import type { ReactNode } from "react";
import AttendanceBadge from "@/components/AttendanceBadge";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import EmptyState from "@/components/EmptyState";
import IconCheck from "@/components/IconCheck";
import IconMinus from "@/components/IconMinus";
import IconNone from "@/components/IconNone";
import IconPlus from "@/components/IconPlus";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InputField from "@/components/InputField";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import Radio from "@/components/Radio";
import RadioOption from "@/components/RadioOption";
import ResponseRow from "@/components/ResponseRow";
import RSVPCard from "@/components/RSVPCard";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import StepButton from "@/components/StepButton";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";
import TextareaField from "@/components/TextareaField";

// 실습용 테스트 페이지: 컴포넌트를 종류별로 모두 보여준다.
// hover·focus 상태는 마우스를 올리거나 클릭해서 확인한다.
const sizes = ["sm", "md", "lg"] as const;

export default function TestPage() {
  return (
    <main className="flex flex-col gap-section bg-background-subtle px-page-horizontal py-section">
      <h1 className="text-display-lg text-text-strong">컴포넌트 모음</h1>

      <Demo name="icon/none · check · plus · minus">
        <div className="flex items-center gap-stack-md">
          <span className="outline outline-border-default">
            <IconNone />
          </span>
          <IconCheck />
          <IconPlus />
          <IconMinus />
        </div>
      </Demo>

      <Demo name="Image (character / flag)">
        <div className="flex items-start gap-stack-md">
          <Image type="character" alt="" />
          <Image type="flag" alt="" />
        </div>
      </Demo>

      <Demo name="Label (required 켜짐 / 꺼짐)">
        <Label>Label</Label>
        <Label required={false}>Label</Label>
      </Demo>

      <Demo name="Radio (default / selected / disabled)">
        <div className="flex">
          <Radio />
          <Radio state="selected" />
          <Radio state="disabled" />
        </div>
      </Demo>

      <Demo name="AttendanceBadge (yes / no)">
        <div className="flex gap-stack-md">
          <AttendanceBadge status="yes" />
          <AttendanceBadge status="no" />
        </div>
      </Demo>

      <Demo name="SuccessIcon">
        <SuccessIcon />
      </Demo>

      <Demo name="InfoRow (inline / spread)">
        <InfoRow label="일시" value="2026년 11월 14일 (토) 09:00" />
        <InfoRow type="spread" label="일시" value="2026년 11월 14일 (토) 09:00" />
      </Demo>

      <Demo name="StatCard (highlight 꺼짐 / 켜짐)">
        <div className="flex gap-stack-sm">
          <StatCard label="참석" value="2명" />
          <StatCard label="참석" value="2명" highlight />
        </div>
      </Demo>

      <Demo name="EmptyState">
        <EmptyState />
      </Demo>

      <Demo name="SectionHeader">
        <SectionHeader />
      </Demo>

      <Demo name="Button (왼쪽: 기본, 오른쪽: disabled)">
        {sizes.map((size) => (
          <div key={size} className="flex flex-wrap items-center gap-stack-md">
            <Button size={size}>Button</Button>
            <Button size={size} disabled>
              Button
            </Button>
          </div>
        ))}
      </Demo>

      <Demo name="StepButton (minus / plus / minus disabled)">
        <div className="flex gap-stack-sm">
          <StepButton icon="minus" aria-label="빼기" />
          <StepButton icon="plus" aria-label="더하기" />
          <StepButton icon="minus" aria-label="빼기" disabled />
        </div>
      </Demo>

      <Demo name="InputField (빈 칸 / 값 있음) — 클릭하면 focus">
        <InputField placeholder="placeholder" />
        <InputField defaultValue="placeholder" />
      </Demo>

      <Demo name="TextareaField">
        <TextareaField placeholder="게스트에게 전할 초대 글을 적어주세요" />
      </Demo>

      <Demo name="NavBar">
        <div className="bg-surface-default">
          <NavBar title="Label" />
        </div>
      </Demo>

      <Demo name="Stepper (−/+ 눌러보기, 0명이면 − disabled)">
        <Stepper defaultValue={1} />
      </Demo>

      <Demo name="Input (required / 안내 문구)">
        <Input label="Label" required placeholder="placeholder" />
        <Input label="Label" placeholder="placeholder" showHelper />
      </Demo>

      <Demo name="Textarea (rows 4 / rows 2)">
        <Textarea label="Label" required placeholder="게스트에게 전할 초대 글을 적어주세요" />
        <Textarea label="Label" rows={2} required placeholder="게스트에게 전할 초대 글을 적어주세요" showHelper />
      </Demo>

      <Demo name="RadioOption (클릭해보기)">
        <div className="flex">
          <RadioOption label="참석" name="demo" value="yes" />
          <RadioOption label="불참" name="demo" value="no" />
        </div>
      </Demo>

      <Demo name="ResponseRow (참석 / 불참)">
        <ResponseRow name="김허들" meta="동반 1명" status="yes" />
        <ResponseRow name="이허들" status="no" />
      </Demo>

      <Demo name="CopyLinkField (복사 눌러보기)">
        <CopyLinkField
          title="초대장 링크"
          description="게스트에게 공유하는 링크예요."
          url="http://localhost:3000/i/k3f9x2a7"
        />
      </Demo>

      <Demo name="InvitationCover">
        <div className="-mx-page-horizontal">
          <InvitationCover
            subtitle="Huddling Club 2nd Meetup"
            title={"허들링 클럽 2번째\n오프라인 밋업"}
            date="2026년 11월 14일 (토) 09:00"
            location="세종 남극 기지"
          />
        </div>
      </Demo>

      <Demo name="RSVPCard (form) — 이름·참석 여부를 채우면 버튼이 켜짐">
        <RSVPCard />
      </Demo>

      <Demo name="RSVPCard (done)">
        <RSVPCard state="done" response={{ name: "김허들", attendance: "yes", companions: 1 }} />
      </Demo>
    </main>
  );
}

function Demo({ name, children }: { name: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-stack-sm">
      <h2 className="text-label-md text-text-secondary">{name}</h2>
      {children}
    </section>
  );
}
