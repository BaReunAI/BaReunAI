# 바른AI · 오원석 박사 랜딩 페이지

## Project Overview
- **Name**: 바른AI — Dr. Wonseok Oh Landing Page
- **Goal**: 생성형 AI 전문 강사 오원석 박사의 프로필을 미래 지향적 디자인으로 소개하고, 강의·자문 문의를 받는 공식 랜딩 페이지
- **Brand**: 바른AI (BareunAI)
- **Tagline**: "업무의 미래 지금 만듭니다"

## 🌐 Live URLs
- **Production**: https://bareunai.com
- **Production (www)**: https://www.bareunai.com
- **Cloudflare Subdomain**: https://bareunai-git3.pages.dev
- **GitHub**: https://github.com/BaReunAI/BaReunAI

## ✨ Features
- 히어로 섹션 (AI 사이버시티 배경 + 프로필 + 그라디언트 애니메이션)
- 실적 통계 (카운트업 애니메이션)
- 소개 / 약력 / 학력 / 자격 섹션
- 저서 (3D 북커버, 2025년 발간 2권)
- 강의 이력 (공공·대학·기업·방송 카테고리 필터)
- 🌟 **바이브 코딩(Vibe Coding)** 전용 섹션 (4-Pillar + 5-Step 커리큘럼)
- 문의 폼 (Resend API로 이메일 자동 발송)
- SEO 최적화 (sitemap.xml, robots.txt, 메타태그)

## 🔌 API Endpoints
| Method | Path | Description |
|---|---|---|
| GET | `/` | 랜딩 페이지 HTML 렌더링 |
| POST | `/api/contact` | 문의 접수 API (JSON: `name`, `email`, `phone`, `topic`, `message`) → Resend로 이메일 발송 |
| GET | `/sitemap.xml` | 검색엔진용 사이트맵 |
| GET | `/robots.txt` | 크롤러 안내 |
| GET | `/static/*` | 정적 자산 (style.css, app.js, profile.png 등) |

## 📊 Data Architecture
- **Data Models (정적 콘텐츠)**: positions, education, certifications, books, lectures, vibeCoding (모두 `src/index.tsx`)
- **Email Service**: Resend API
  - 발신: `contact@bareunai.com` (DKIM/SPF/DMARC Verified)
  - 수신: `ResearchAi@naver.com`
  - 도메인 인증 완료
- **Domain Registrar**: Cloudflare Registrar (bareunai.com)

## 🚀 Deployment

### Auto-Deploy Pipeline (✅ Active)
```
GitHub push (main branch)
  ↓
Cloudflare Pages 자동 빌드 (npm run build)
  ↓
dist/_worker.js 배포
  ↓
https://bareunai.com 즉시 반영 (~2분)
```

### Manual Deploy (필요 시)
```bash
npm run build
npx wrangler pages deploy dist --project-name bareunai-git3
```

### Tech Stack
- **Framework**: Hono (Edge runtime)
- **Build**: Vite + @hono/vite-cloudflare-pages
- **Language**: TypeScript (JSX)
- **Hosting**: Cloudflare Pages (Git-connected)
- **Email**: Resend API
- **CDN**: Cloudflare global edge network

## 🔐 Environment Secrets (Cloudflare Pages)
| Secret | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend 이메일 발송 인증 |
| `CONTACT_TO_EMAIL` | 문의 수신 메일 주소 |
| `CONTACT_FROM_EMAIL` | 발신 메일 주소 (`바른AI <contact@bareunai.com>`) |

로컬 개발 시: `.dev.vars` 파일 사용 (gitignore됨, `.dev.vars.example` 참고)

## 🛠️ Local Development
```bash
# 1. 의존성 설치
npm install

# 2. 환경변수 설정
cp .dev.vars.example .dev.vars
# .dev.vars 파일에 실제 값 입력

# 3. 빌드
npm run build

# 4. 로컬 서버 (PM2)
pm2 start ecosystem.config.cjs

# 5. 테스트
curl http://localhost:3000
```

## 📝 User Guide
1. https://bareunai.com 접속
2. 상단 네비게이션 또는 스크롤로 섹션 이동
3. **강의 이력**에서 상단 칩으로 카테고리 필터 (공공/대학/기업/방송)
4. **바이브 코딩** 섹션에서 커리큘럼 확인
5. **강의 문의** 버튼 또는 하단 폼으로 문의 제출 → 즉시 이메일 도착

## ✅ Completed Features
- ✅ 미래 지향적 다크 테마 UI (그라디언트 + 블롭 애니메이션 + 그리드 배경)
- ✅ 반응형 레이아웃 (데스크톱·태블릿·모바일)
- ✅ AI 사이버시티 히어로 이미지
- ✅ Intersection Observer 기반 스크롤 애니메이션
- ✅ 강의 카테고리 필터링
- ✅ 통계 숫자 카운트업
- ✅ 바이브 코딩 전용 섹션 (4-Pillar · 5-Step 커리큘럼 · 인용문)
- ✅ Resend API 통한 이메일 자동 발송
- ✅ 커스텀 도메인 (bareunai.com / www.bareunai.com) + SSL
- ✅ DKIM/SPF/DMARC 도메인 인증
- ✅ SEO sitemap.xml + robots.txt
- ✅ GitHub ↔ Cloudflare Pages 자동 배포 파이프라인

## 🚧 Recommended Next Steps
1. **Google Search Console** 등록 → sitemap.xml 제출
2. **Naver 웹마스터도구** 등록 (한국 검색 최적화)
3. **Open Graph / Twitter Card** 메타태그 (소셜 공유 미리보기)
4. **JSON-LD 구조화 데이터** (구글 검색 결과 강화)
5. 강의 영상 갤러리 / 수강 후기 섹션
6. 블로그/칼럼 아카이브 페이지
7. Google Analytics 또는 Cloudflare Web Analytics

## 📅 Deployment History
- **2026-04-25**: Cloudflare Pages Git 자동 배포 활성화, sitemap.xml 추가
- **2026-04-24**: 도메인 인증 및 프로덕션 런칭 (https://bareunai.com)
- **2026-04-24**: Resend 이메일 발송 시스템 통합
- **2026-04-24**: 초기 랜딩 페이지 구축 + 바이브 코딩 섹션

## 📞 Contact
- **Email**: ResearchAi@naver.com
- **Website**: https://bareunai.com

---

**Status**: ✅ **Production Live**  
**Last Updated**: 2026-04-25
