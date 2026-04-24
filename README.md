# 오원석 박사 랜딩 페이지 (Dr. Wonseok Oh · Landing Page)

## Project Overview
- **Name**: webapp — Dr. Oh AI Landing
- **Goal**: 생성형 AI · 바이브 코딩 전문 강사 **오원석 박사**의 프로필 / 강의이력 / 저서 / 문의까지 한 페이지로 소개하는 미래 지향적 랜딩 페이지
- **Main Features**:
  - 애니메이션 히어로 (그라디언트 타이틀, 플로팅 프로필 카드)
  - 실적 스탯 카운터 (30+ 경력, 100+ 강의 등)
  - 약력 · 학력 · 자격증 타임라인
  - 2025년 출간 저서 2권 3D 북 커버
  - 카테고리 필터 가능한 강의 이력 (공공/대학/기업/방송)
  - **Vibe Coding 전용 섹션** (4대 기둥 + 5단계 커리큘럼)
  - 빠른 문의 폼 (Hono API 연동)
  - 완전 반응형 (모바일/태블릿/데스크톱)

## URLs
- **Local Dev**: http://localhost:3000
- **Sandbox (임시 Public URL)**: https://3000-ishi8euf8zegwmjx68kd3-b32ec7bb.sandbox.novita.ai
- **API Endpoint**: `POST /api/contact` — 문의 접수
- **Production**: *(Cloudflare Pages 배포 전)*

## 기능 진입점 (URI)
| Path | Method | 설명 |
|---|---|---|
| `/` | GET | 메인 랜딩 페이지 (히어로 · 약력 · 저서 · 강의이력 · 바이브 코딩 · 문의) |
| `/api/contact` | POST | 문의 폼 제출 (JSON: `name`, `email`, `phone?`, `topic?`, `message`) |
| `/static/profile.png` | GET | 프로필 사진 |
| `/static/style.css` | GET | 스타일시트 |
| `/static/app.js` | GET | 프런트엔드 스크립트 (스크롤 리빌 · 카운터 · 필터 · 폼 제출) |

## Data Architecture
- **데이터 모델 (현재 인메모리 / 소스코드 정의)**:
  - `profile` — 기본 프로필 (이름, 연락처, 태그라인)
  - `positions[]` — 현/전 경력 (현: 6건, 전: 2건)
  - `education[]` — 학력 3건 (연세대 학부·박사, KAIST 석사)
  - `certifications[]` — 자격증
  - `books[]` — 저서 2권 (미디어북, 2025)
  - `lectures[]` — 강의 이력 22+건 (공공/대학/기업/방송 카테고리)
  - `vibeCoding` — 바이브 코딩 소개, 4 pillars, 5단계 커리큘럼
  - `stats[]` — 실적 통계 카드
- **Storage Services**: 현재는 소스 내 정적 데이터. 필요 시 Cloudflare D1(문의 저장)·KV(설정)·R2(이미지) 연동 가능
- **Data Flow**: Hono SSR JSX → HTML 렌더링 → 클라이언트 JS가 스크롤 리빌·필터·폼 제출 처리

## User Guide
1. 상단 메뉴 / 히어로 버튼으로 섹션 이동
2. **강의이력** 섹션: 필터 칩을 눌러 카테고리별(공공기관/대학·교육원/기업/방송) 확인
3. **바이브 코딩** 섹션: 커리큘럼 5단계와 4대 기둥 확인
4. **문의 보내기**: 하단 폼 작성 → 즉시 `/api/contact` 로 전송 (현재는 서버 로그 출력, 추후 이메일/DB 연동)
5. 직접 연락: `ResearchAi@naver.com` / `010-3404-9624`

## 현재 구현된 기능
- ✅ 풀 프로필 랜딩 페이지 (7개 섹션)
- ✅ 애니메이션 배경(블롭, 그리드) · 그라디언트 타이틀
- ✅ 스크롤 리빌 + 스탯 카운터 애니메이션
- ✅ 강의 이력 카테고리 필터
- ✅ 반응형 디자인 (1024px / 720px 브레이크포인트)
- ✅ 문의 폼 + Hono API 엔드포인트
- ✅ SEO 메타 태그 (OG, description, keywords)

## 미구현 / 향후 확장 기능
- ❌ 문의 이메일 자동 발송 (SendGrid / Resend 연동 필요)
- ❌ 문의 내역 DB 저장 (Cloudflare D1)
- ❌ 다국어 지원 (EN/KO 스위처)
- ❌ 블로그 / 칼럼 자동 수집 (한국강사신문 RSS)
- ❌ 강의 신청 캘린더 연동 (Calendly 등)
- ❌ Cloudflare Pages 프로덕션 배포

## 추천 다음 단계
1. **이메일 연동**: Resend/SendGrid API로 `/api/contact` 제출 시 박사님 이메일로 자동 발송
2. **D1 DB 연동**: 문의 내역을 D1에 저장해 관리 대시보드 제공
3. **Cloudflare Pages 배포**: `setup_cloudflare_api_key` 호출 후 `npm run deploy:prod`
4. **프로필 사진 교체**: 박사님의 고해상도 프로필 사진으로 `public/static/profile.png` 교체 권장
5. **실제 강의/저서 사진 추가**: 저서 커버 이미지, 강의 현장 사진 추가
6. **칼럼 섹션 추가**: 한국강사신문 칼럼 하이라이트 섹션
7. **유튜브/영상 임베드**: 강의 영상이 있다면 hero 또는 별도 섹션에 임베드

## Deployment
- **Platform**: Cloudflare Pages (Hono on Workers)
- **Status**: 🟡 로컬 샌드박스에서 구동 중 (Cloudflare Pages 배포 대기)
- **Tech Stack**: Hono 4.x · TypeScript · JSX SSR · Vite 6 · Wrangler · Vanilla JS/CSS (Pretendard + Space Grotesk)
- **Build**: `npm run build` → `dist/_worker.js` (~66KB)
- **Last Updated**: 2026-04-24

## Development
```bash
# 빌드
cd /home/user/webapp && npm run build

# PM2 시작
pm2 start ecosystem.config.cjs
pm2 logs webapp --nostream

# 로컬 테스트
curl http://localhost:3000

# Cloudflare Pages 배포 (API 키 설정 후)
npm run deploy
```
