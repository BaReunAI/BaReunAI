import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="naver-site-verification" content="dda8c14da8148c915b4774fc1e1c43240589f617" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="오원석 박사 | 생성형 AI · 바이브 코딩 전문 강사. 삼성전자 수석연구원 · KAIST 석사 · 연세대 AI 박사. 직장인 대상 AI 업무 효율화 강의." />
        <meta name="keywords" content="오원석, 생성형 AI 강사, 바이브 코딩, ChatGPT 강의, AI 리터러시, AX 혁신, 바른AI" />
        <meta property="og:title" content="오원석 박사 | 생성형 AI · 바이브 코딩 전문 강사" />
        <meta property="og:description" content="AI로 업무의 미래를 지금 만듭니다. 30년 R&D 경력의 AI 박사." />
        <meta property="og:type" content="website" />
        <title>오원석 박사 | 생성형 AI · 바이브 코딩 전문 강사</title>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🤖%3C/text%3E%3C/svg%3E" />
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.min.css" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
