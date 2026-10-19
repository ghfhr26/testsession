"use client";

import { useState } from "react";
import Button from "@/components/Button";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import Label from "@/components/Label";
import RadioOption from "@/components/RadioOption";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";

type Attendance = "yes" | "no";

type RSVPResponse = {
  name: string;
  attendance: Attendance;
  companions: number;
};

type RSVPCardProps = {
  // form: 제출 전 / done: 제출 후 (같은 자리에서 바뀐다)
  state?: "form" | "done";
  // 제출할 때 실행할 함수 (나중에 Server Action을 연결한다)
  // 보내는 값: name, attendance(yes/no), companions(숫자)
  action?: (formData: FormData) => void | Promise<void>;
  // state=done일 때 보여줄 내 응답
  response?: RSVPResponse;
};

// Figma: RSVPCard (node 2168:1029)
// 보기 화면(/i/[id])의 참석 신청 카드.
export default function RSVPCard({ state = "form", action, response }: RSVPCardProps) {
  return (
    <div className="flex w-full flex-col items-start gap-stack-lg overflow-hidden rounded-card bg-surface-default px-page-horizontal py-stack-lg">
      {state === "done" ? <DoneView response={response} /> : <FormView action={action} />}
    </div>
  );
}

function FormView({ action }: { action: RSVPCardProps["action"] }) {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<Attendance | null>(null);
  // 필수값(이름, 참석 여부)이 비어 있으면 버튼을 disabled로 둔다
  const canSubmit = name.trim() !== "" && attendance !== null;

  return (
    <form action={action} className="flex w-full flex-col items-start gap-stack-lg">
      <div className="flex w-full flex-col items-center gap-inline-compact text-center">
        <p className="text-heading-lg text-text-strong">참석 여부 알려주기</p>
        <p className="text-body-md text-text-secondary">이름과 참석 여부를 남겨주세요.</p>
      </div>

      <div className="flex w-full flex-col items-start gap-stack-lg">
        <Input
          label="이름"
          name="name"
          required
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <fieldset className="flex w-full flex-col items-start gap-inline-md">
          <legend className="contents">
            <Label>참석 여부</Label>
          </legend>
          <div className="flex w-full items-center">
            <RadioOption
              label="참석"
              name="attendance"
              value="yes"
              checked={attendance === "yes"}
              onChange={() => setAttendance("yes")}
            />
            <RadioOption
              label="불참"
              name="attendance"
              value="no"
              checked={attendance === "no"}
              onChange={() => setAttendance("no")}
            />
          </div>
        </fieldset>

        <div className="flex w-full flex-col items-start gap-inline-md">
          <Label>동반 인원</Label>
          <Stepper name="companions" />
          <p className="text-caption-md text-text-tertiary">본인을 제외하고 함께 오는 인원이에요.</p>
        </div>
      </div>

      <Button type="submit" size="lg" disabled={!canSubmit} className="w-full">
        참석 여부 보내기
      </Button>
    </form>
  );
}

function DoneView({ response }: { response?: RSVPResponse }) {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-stack-sm py-section-lg text-center">
        <SuccessIcon />
        <p className="text-title-lg text-text-strong">참석 여부를 보냈어요</p>
        <p className="text-body-md text-text-secondary">호스트에게 응답이 전달됐어요.</p>
      </div>
      {response && (
        <div className="flex w-full flex-col items-start gap-inline-md overflow-hidden rounded-card bg-surface-subtle p-stack-md">
          <InfoRow type="spread" label="이름" value={response.name} />
          <InfoRow
            type="spread"
            label="참석 여부"
            value={response.attendance === "yes" ? "참석" : "불참"}
          />
          <InfoRow type="spread" label="동반 인원" value={`${response.companions}명`} />
        </div>
      )}
    </>
  );
}
