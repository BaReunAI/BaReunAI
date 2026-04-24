# 오원석 박사 · 생성형 AI · 바이브 코딩 강사 랜딩 페이지

## Project Overview
- **Name**: Dr. Wonseok Oh — Landing Page
- **Goal**: 생성형 AI 전문 강사 오원석 박사의 프로필을 미래 지향적 디자인으로 소개하고, 강의·자문 문의를 받는 공식 랜딩 페이지
- **Features**:
  - 히어로 섹션 (그라디언트 애니메이션, 프로필 사진, 부유 카드)
  - 실적 통계 (카운트업 애니메이션)
  - 소개 / 약력 / 학력 / 자격 섹션
  - 저서 (3D 북커버)
  - 강의 이력 (공공·대학·기업·방송 카테고리 필터)
  - 🌟 **바이브 코딩(Vibe Coding)** 전용 섹션 (4-Pillar + 5-Step 커리큘럼)
  - 문의 폼 (POST `/api/contact`)

## URLs
- **Local**: http://localhost:3000
- **Public (Sandbox)**: https://3000-ishi8euf8zegwmjx68kd3-b32ec7bb.sandbox.novita.ai
- **Production**: (배포 시 갱신 예정)

## Functional Entry URIs
| Method | Path | Description |
|---|---|---|
| GET | `/` | 랜딩 페이지 HTML 렌더링 |
| POST | `/api/contact` | 문의 접수 API (JSON: `name`, `email`, `phone`, `topic`, `message`) |
| GET | `/static/*` | 정적 자산 (style.css, app.js, profile.png) |

## Data Architecture
- **Data Models (정적 콘텐츠)**: positions, education, certifications, books, lectures, vibeCoding
- **Storage Services**: 현재 사용 안 함 (문의 폼은 콘솔 로그). 이메일 발송 또는 KV/D1 연동은 다음 단계 예정.
- **Data Flow**: 사용자 → 프론트 fetch → Hono API → (향후 Cloudflare KV/D1 또는 Gmail 연동)

## User Guide
1. 상단 네비게이션 또는 스크롤로 섹션 이동
2. **강의 이력**에서 상단 칩으로 카테고리 필터 (공공/대학/기업/방송)
3. **바이브 코딩** 섹션에서 커리큘럼 확인
4. **강의 문의** 버튼 또는 하단 폼으로 문의 제출

## Currently Completed Features
- ✅ 미래 지향적 다크 테마 UI (그라디언트 + 블롭 애니메이션 + 그리드 배경)
- ✅ 반응형 레이아웃 (데스크톱·태블릿·모바일)
- ✅ 실제 프로필 사진 (PDF에서 추출)
- ✅ Intersection Observer 기반 스크롤 애니메이션
- ✅ 강의 카테고리 필터링
- ✅ 통계 숫자 카운트업
- ✅ 문의 폼 클라이언트·서버 연동 (mock 저장)
- ✅ 바이브 코딩 전용 섹션 (4-Pillar · 5-Step 커리큘럼 · 인용문)

## Features Not Yet Implemented
- ❌ 문의 내용 실제 저장 (KV/D1) 또는 이메일 발송 (Gmail API)
- ❌ Cloudflare Pages 프로덕션 배포
- ❌ 블로그/칼럼 아카이브 페이지
- ❌ 강의 영상 갤러리 / 수강 후기

## Recommended Next Steps
1. **Cloudflare Pages 배포** — `setup_cloudflare_api_key` 후 `npx wrangler pages deploy dist`
2. **문의 저장 연동** — Cloudflare KV 또는 D1 추가 후 `/api/contact`에 저장 로직 추가
3. **이메일 알림** — Resend/SendGrid API로 문의 시 자동 알림
4. **강의 영상 섹션** — 유튜브 임베드 또는 미디어 갤러리
5. **커스텀 도메인** 연결 (예: researchai.co.kr)

## Deployment
- **Platform**: Cloudflare Pages (예정) · 현재 로컬 PM2 개발 서버 구동 중
- **Status**: ✅ Active (sandbox)
- **Tech Stack**: Hono + TypeScript (JSX) + Vite + Wrangler · CSS 커스텀 (Pretendard + Space Grotesk) + FontAwesome
- **Last Updated**: 2026-04-24
