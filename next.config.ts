// Next.js 설정 파일.
// 개발 서버(npm run dev)나 빌드(npm run build)를 시작할 때 Next.js가 이 파일을 먼저 읽고,
// 여기 적힌 옵션대로 앱을 실행한다.

// NextConfig: 설정에 쓸 수 있는 항목 목록(타입). 오타나 없는 옵션을 쓰면 편집기가 알려준다.
import type { NextConfig } from "next";

/**
 * 이 프로젝트의 Next.js 설정 묶음.
 * 아래 옵션들은 프로젝트를 만들 때 정해진 것으로, CLAUDE.md 규칙상 허락 없이 바꾸지 않는다.
 */
const nextConfig: NextConfig = {
  /* config options here */
  // cacheComponents: 데이터를 기본적으로 요청마다 새로 가져오고,
  // 캐시(결과를 저장해 두고 재사용)가 필요한 곳에만 'use cache'를 붙여 쓰게 하는 방식.
  // 페이지의 고정된 부분은 미리 만들어 바로 보여주고, 바뀌는 부분은 준비되는 대로 이어서 보낸다.
  // 이 옵션 때문에 params 같은 요청 시점 데이터는 <Suspense>(로딩 중 대체 화면을 보여주는 감싸개) 안에서 읽어야 한다.
  // partialPrefetching: 링크를 누르기 전에 다음 페이지의 고정된 부분만 미리 받아 두어 이동을 빠르게 한다.
  // cacheComponents가 켜져 있어야 쓸 수 있다.
  cacheComponents: true,
  partialPrefetching: true,
  // turbopack: Next.js가 코드를 묶어서 실행 가능하게 만드는 도구(번들러)의 설정.
  // rules: .css 파일을 처리할 때 Tailwind 변환 도구(@tailwindcss/turbopack)를 거치게 하고,
  // 결과는 다시 CSS로 다룬다(as). 그래서 className="flex ..." 같은 Tailwind 클래스가 실제 스타일이 된다.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

// 위 설정을 내보내서 Next.js가 읽을 수 있게 한다.
export default nextConfig;
