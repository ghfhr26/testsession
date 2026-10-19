import type { ReactNode } from "react";
import IconNone from "@/components/IconNone";

type NavBarProps = {
  title: string;
  // 양옆 아이콘 자리. 없으면 빈 자리(icon/none)를 둔다.
  left?: ReactNode;
  right?: ReactNode;
};

// Figma: NavBar (node 2168:968)
export default function NavBar({ title, left, right }: NavBarProps) {
  return (
    <header className="flex h-[65px] w-full items-center gap-section p-page-horizontal">
      {left ?? <IconNone />}
      <h1 className="min-w-0 flex-1 text-center text-heading-md text-text-primary">{title}</h1>
      {right ?? <IconNone />}
    </header>
  );
}
