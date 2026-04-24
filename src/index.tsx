import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// ============================================================
// Data Models
// ============================================================
const profile = {
  name: '오원석',
  nameEn: 'Ph.D. Wonseok Oh',
  title: '생성형 AI · 바이브 코딩 전문 강사',
  tagline: 'AI로 업무의 본질을 바꾸는 법',
  description:
    'R&D 연구경력 30여 년의 AI 박사. 삼성전자 종합기술원 수석연구원, 식약처 공무원 출신. 현장에서 통하는 생성형 AI 업무 혁신을 전합니다.',
  email: 'ResearchAi@naver.com',
  phone: '010-3404-9624',
}

const positions = [
  { type: '현', role: '바른AI 대표', icon: 'fa-building' },
  { type: '현', role: '디지털융합교육원 지도교수', icon: 'fa-graduation-cap' },
  { type: '현', role: '한국강사신문 칼럼니스트', icon: 'fa-feather-alt' },
  { type: '현', role: '전북대학교 평생교육원 전담교수', icon: 'fa-university' },
  { type: '현', role: '능력개발교육원 강사', icon: 'fa-chalkboard-teacher' },
  { type: '현', role: '레이크테크놀로지 비상근 감사', icon: 'fa-user-shield' },
  { type: '전', role: '삼성전자 종합기술원 수석연구원', icon: 'fa-microchip' },
  { type: '전', role: '식품의약품안전처 5급 공무원', icon: 'fa-landmark' },
]

const education = [
  { degree: '박사', school: '연세대학교 생명공학과', major: 'AI를 활용한 신약 개발' },
  { degree: '석사', school: 'KAIST 화학과', major: '계산 화학' },
  { degree: '학부', school: '연세대학교 화학과', major: '' },
]

const certifications = [
  '생성형 AI 교육 지도사 (한국메타버스ESG연구원)',
]

const books = [
  {
    title: '일 잘하는 사람들의 비밀 무기: 생성형 AI로 업무 혁신!',
    publisher: '미디어북',
    year: '2025',
    desc: '실무자를 위한 생성형 AI 업무 활용 실전 가이드',
  },
  {
    title: 'AI 하나로 광고의신이 되는 법',
    publisher: '미디어북',
    year: '2025',
    desc: 'AI로 광고 카피·이미지·영상까지 완성하는 마케팅 교본',
  },
]

const lectures = [
  { org: '한국산업단지공단 전북지역본부', topic: 'AX 혁신 부흥운동 아카데미' },
  { org: '한국전력 경인건설본부', topic: '생성형 AI 업무 활용' },
  { org: 'KAIST SW 교육원', topic: 'AI 리터러시 (국세청)' },
  { org: 'KAIST SW 교육원', topic: '생성형 AI 활용 (국세청)' },
  { org: '포항창조경제혁신센터', topic: '생성형AI 역량강화 교육 (반복업무 자동화)' },
  { org: '㈜한켐', topic: '생성형 AI, 더 똑똑하게 일하는 법' },
  { org: '㈜모베이스전자', topic: '생성형 AI 동향 및 적용 방안' },
  { org: '㈜켐옵틱스', topic: '생성형 AI 알고 사용하자' },
  { org: '한국서부발전', topic: '데이터 분석 및 시각화 실습' },
  { org: '고양상공회의소', topic: '생성형 AI 업무 효율화' },
  { org: '충남대학교 평생교육원', topic: '생성형AI (ChatGPT)를 활용한 업무 효율화' },
  { org: '군산대학교 평생교육원', topic: '생성형AI (ChatGPT)를 활용한 업무 효율화' },
  { org: '한국전력 해외원전사업부', topic: '[디지털 리터러시] 생성형AI 시대, 나의 업무 파트너' },
  { org: '한국전력 본사', topic: '[생성형AI 리터러시 교육] (심화과정) 생성형 AI를 활용한 업무 효율화' },
  { org: '한국전력 인재개발원', topic: '생성형 AI 도구의 실무 활용' },
  { org: '한국산림치유지도사협회', topic: '인공지능 활용법 및 패러다임' },
  { org: '전북대학교 평생교육원', topic: '생성형AI 마스터 과정' },
  { org: 'MBN', topic: 'Perplexity를 활용한 업무 효율화' },
  { org: '국가기술표준원', topic: 'AI활용 보고서 및 보도자료 작성' },
  { org: '한국전력 본사', topic: '생성형AI활용 업무효율화' },
  { org: '지방자치인재개발원', topic: '디지털 소통' },
]

const vibeCoding = {
  title: 'Vibe Coding',
  subtitle: '바이브 코딩 — 코드를 짜지 않고, 아이디어로 앱을 만든다',
  description:
    '바이브 코딩은 자연어로 AI와 대화하듯 소프트웨어를 만드는 새로운 개발 패러다임입니다. 개발자가 아니어도 아이디어만 있으면 웹앱·자동화·데이터 도구를 스스로 구축할 수 있습니다.',
  pillars: [
    {
      icon: 'fa-comments',
      title: '대화형 개발',
      desc: 'AI에게 원하는 기능을 자연어로 설명하면 곧바로 동작하는 코드가 만들어집니다.',
    },
    {
      icon: 'fa-bolt',
      title: '10배 빠른 프로토타이핑',
      desc: '아이디어 → MVP까지 며칠이 아닌 몇 시간. 생각의 속도로 제품이 태어납니다.',
    },
    {
      icon: 'fa-user-astronaut',
      title: '비개발자 시민 개발',
      desc: '기획자·마케터·연구원도 직접 자동화 툴을 만들 수 있는 시대가 왔습니다.',
    },
    {
      icon: 'fa-infinity',
      title: '끝없는 반복 개선',
      desc: '대화로 수정·배포·리팩토링까지. 완성이 아닌 진화하는 소프트웨어.',
    },
  ],
  curriculum: [
    { step: '01', title: '바이브 코딩 마인드셋', desc: 'AI와 협업하는 사고방식, 프롬프트 설계의 기본기' },
    { step: '02', title: '핵심 도구 마스터', desc: 'Cursor · Claude Code · Gemini · GenSpark · v0 활용법' },
    { step: '03', title: '실전 웹앱 구축', desc: 'HTML/CSS/JS 자동 생성, Cloudflare로 즉시 배포' },
    { step: '04', title: '업무 자동화 봇', desc: '반복 업무 → AI 스크립트, 나만의 업무 파트너 제작' },
    { step: '05', title: '팀 단위 확산', desc: '조직에 바이브 코딩 문화를 이식하는 실전 전략' },
  ],
}

const stats = [
  { value: '30+', label: 'R&D 연구경력', icon: 'fa-flask' },
  { value: '100+', label: '기업·기관 강의', icon: 'fa-chalkboard' },
  { value: '2', label: '2025년 출간 저서', icon: 'fa-book-open' },
  { value: '3', label: 'AI 전문 자격·학위', icon: 'fa-award' },
]

// ============================================================
// Routes
// ============================================================
app.get('/', (c) => {
  return c.render(
    <>
      {/* =============== Animated Background =============== */}
      <div id="bg-animation" aria-hidden="true">
        <div class="grid-bg"></div>
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>

      {/* =============== Navigation =============== */}
      <header id="top-nav">
        <nav class="nav-inner">
          <a href="#hero" class="logo">
            <span class="logo-mark">ResearchAi</span>
            <span class="logo-sub">by Dr. Oh</span>
          </a>
          <ul class="nav-links">
            <li><a href="#about">소개</a></li>
            <li><a href="#career">약력</a></li>
            <li><a href="#books">저서</a></li>
            <li><a href="#lectures">강의이력</a></li>
            <li><a href="#vibe">바이브 코딩</a></li>
            <li><a href="#contact" class="nav-cta">강의 문의</a></li>
          </ul>
          <button class="nav-toggle" id="nav-toggle" aria-label="메뉴 열기">
            <i class="fas fa-bars"></i>
          </button>
        </nav>
      </header>

      {/* =============== Hero =============== */}
      <section id="hero" class="hero-section">
        <div class="hero-inner">
          <div class="hero-text">
            <div class="hero-badge">
              <span class="pulse-dot"></span>
              <span>AI · 바이브 코딩 전문 강사</span>
            </div>
            <h1 class="hero-title">
              <span class="line-1">생성형 AI로</span>
              <span class="line-2">
                <span class="gradient-text">업무의 미래</span>를 지금
              </span>
              <span class="line-3">만듭니다.</span>
            </h1>
            <p class="hero-desc">{profile.description}</p>
            <div class="hero-cta">
              <a href="#contact" class="btn-primary">
                <i class="fas fa-paper-plane"></i>
                강의 문의하기
              </a>
              <a href="#vibe" class="btn-ghost">
                <i class="fas fa-wand-magic-sparkles"></i>
                바이브 코딩 알아보기
              </a>
            </div>
          </div>

          <div class="hero-visual">
            <div class="profile-frame">
              <div class="profile-ring"></div>
              <img src="/static/profile.png" alt="오원석 박사 프로필 사진" class="profile-photo" />
              <div class="floating-card card-1">
                <i class="fas fa-brain"></i>
                <div>
                  <div class="card-title">AI 박사</div>
                  <div class="card-sub">연세대 생명공학</div>
                </div>
              </div>
              <div class="floating-card card-2">
                <i class="fas fa-microchip"></i>
                <div>
                  <div class="card-title">삼성전자</div>
                  <div class="card-sub">종합기술원 수석연구원</div>
                </div>
              </div>
              <div class="floating-card card-3">
                <i class="fas fa-book"></i>
                <div>
                  <div class="card-title">저서 2권</div>
                  <div class="card-sub">미디어북, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#stats" class="scroll-indicator" aria-label="아래로 스크롤">
          <i class="fas fa-chevron-down"></i>
        </a>
      </section>

      {/* =============== Stats =============== */}
      <section id="stats" class="stats-section">
        <div class="container">
          <div class="stats-grid">
            {stats.map((s) => (
              <article class="stat-card">
                <div class="stat-icon"><i class={`fas ${s.icon}`}></i></div>
                <div class="stat-value" data-value={s.value}>{s.value}</div>
                <div class="stat-label">{s.label}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =============== About =============== */}
      <section id="about" class="about-section">
        <div class="container">
          <div class="section-head">
            <span class="section-tag">ABOUT</span>
            <h2 class="section-title">현장을 아는 AI 박사</h2>
            <p class="section-sub">
              연구실의 깊이와 현장의 속도를 모두 갖춘, 드문 이력의 생성형 AI 강사.
            </p>
          </div>

          <div class="about-grid">
            <div class="about-story">
              <p>
                <strong>30년 R&D 경력</strong>과 <strong>AI 박사학위</strong>, 그리고 <strong>공공·대기업</strong>에서 쌓은 실무 감각.
                오원석 박사는 '기술을 아는 강사'가 아니라 <em>기술로 일을 바꿔 본 강사</em>입니다.
              </p>
              <p>
                강의는 언제나 <strong>현장에서 증명된 사용법</strong>에서 출발합니다.
                ChatGPT, Claude, Perplexity, GenSpark, 그리고 <strong>바이브 코딩</strong>까지 — 유행이 아닌 <em>업무 성과</em>에 집중합니다.
              </p>
              <p>
                "AI를 배우는 것이 목표가 아닙니다. <br />
                <span class="highlight-text">AI로 일하는 방식 자체를 바꾸는 것</span>이 목표입니다."
              </p>
            </div>

            <div class="about-specialty">
              <h3>전문 분야</h3>
              <ul class="specialty-list">
                <li><i class="fas fa-check-circle"></i> 생성형 AI 업무 효율화 (ChatGPT · Claude · Gemini)</li>
                <li><i class="fas fa-check-circle"></i> 바이브 코딩 (Vibe Coding) 실전 교육</li>
                <li><i class="fas fa-check-circle"></i> AI 리터러시 · AX 혁신 조직 강연</li>
                <li><i class="fas fa-check-circle"></i> 데이터 분석 · 시각화 · 보고서 자동화</li>
                <li><i class="fas fa-check-circle"></i> 공공기관·대기업 임직원 대상 맞춤 교육</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =============== Career / Positions =============== */}
      <section id="career" class="career-section">
        <div class="container">
          <div class="section-head">
            <span class="section-tag">CAREER</span>
            <h2 class="section-title">약력</h2>
            <p class="section-sub">연구 · 공공 · 산업 · 교육 — 네 영역을 잇는 경력</p>
          </div>

          <div class="positions-grid">
            {positions.map((p) => (
              <article class={`position-card ${p.type === '현' ? 'is-current' : 'is-past'}`}>
                <div class="position-icon"><i class={`fas ${p.icon}`}></i></div>
                <div class="position-body">
                  <span class="position-badge">{p.type === '현' ? '현재' : '이력'}</span>
                  <h3>{p.role}</h3>
                </div>
              </article>
            ))}
          </div>

          <div class="edu-cert-grid">
            <div class="edu-block">
              <h3><i class="fas fa-graduation-cap"></i> 학력</h3>
              <ul class="timeline">
                {education.map((e) => (
                  <li class="timeline-item">
                    <span class="timeline-dot"></span>
                    <div>
                      <div class="timeline-title">
                        <strong>{e.degree}</strong> · {e.school}
                      </div>
                      {e.major && <div class="timeline-sub">전공: {e.major}</div>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div class="edu-block">
              <h3><i class="fas fa-certificate"></i> 자격증</h3>
              <ul class="cert-list">
                {certifications.map((cert) => (
                  <li><i class="fas fa-medal"></i> {cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =============== Books =============== */}
      <section id="books" class="books-section">
        <div class="container">
          <div class="section-head">
            <span class="section-tag">PUBLICATIONS</span>
            <h2 class="section-title">저서</h2>
            <p class="section-sub">2025년, 미디어북에서 동시 출간된 두 권의 실전서</p>
          </div>

          <div class="books-grid">
            {books.map((b, i) => (
              <article class="book-card">
                <div class="book-cover" data-idx={i}>
                  <div class="book-spine"></div>
                  <div class="book-face">
                    <div class="book-brand">미디어북 · {b.year}</div>
                    <div class="book-title">{b.title}</div>
                    <div class="book-author">오 원 석</div>
                  </div>
                </div>
                <div class="book-info">
                  <div class="book-year"><i class="fas fa-calendar"></i> {b.year}년 · {b.publisher}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =============== Lectures =============== */}
      <section id="lectures" class="lectures-section">
        <div class="container">
          <div class="section-head">
            <span class="section-tag">LECTURES</span>
            <h2 class="section-title">강의 이력</h2>
            <p class="section-sub">공공기관 · 대기업 · 대학 · 방송까지 — 현장에서 검증된 강의</p>
          </div>

          <div class="lecture-filter">
            <button class="chip chip-active" data-filter="all">전체</button>
            <button class="chip" data-filter="공공">공공기관</button>
            <button class="chip" data-filter="대학">대학·교육원</button>
            <button class="chip" data-filter="기업">기업</button>
            <button class="chip" data-filter="방송">방송·미디어</button>
          </div>

          <div class="lectures-grid" id="lectures-grid">
            {lectures.map((l) => {
              let cat = '기업'
              if (l.org.includes('대학교') || l.org.includes('교육원') || l.org.includes('KAIST') || l.org.includes('인재개발원')) cat = '대학'
              if (l.org.includes('한전') || l.org.includes('한국전력') || l.org.includes('공사') || l.org.includes('산업단지공단') || l.org.includes('발전') || l.org.includes('창조경제') || l.org.includes('상공회의소') || l.org.includes('국가기술표준원') || l.org.includes('자치')) cat = '공공'
              if (l.org.includes('MBN')) cat = '방송'
              return (
                <article class="lecture-card" data-category={cat}>
                  <div class="lecture-cat">{cat}</div>
                  <h3 class="lecture-org">{l.org}</h3>
                  <p class="lecture-topic">{l.topic}</p>
                </article>
              )
            })}
          </div>

          <div class="lecture-more">
            <i class="fas fa-ellipsis-h"></i> 외 다수의 기업·기관 출강
          </div>
        </div>
      </section>

      {/* =============== Vibe Coding (Featured) =============== */}
      <section id="vibe" class="vibe-section">
        <div class="vibe-bg"></div>
        <div class="container">
          <div class="vibe-head">
            <div class="vibe-tag">
              <i class="fas fa-wand-magic-sparkles"></i>
              <span>NEW · 2025 핵심 프로그램</span>
            </div>
            <h2 class="vibe-title">
              <span class="vibe-title-kr">바이브 코딩</span>
              <span class="vibe-title-en">Vibe Coding</span>
            </h2>
            <p class="vibe-subtitle">{vibeCoding.subtitle}</p>
            <p class="vibe-desc">{vibeCoding.description}</p>
          </div>

          <div class="pillars-grid">
            {vibeCoding.pillars.map((p) => (
              <article class="pillar-card">
                <div class="pillar-icon"><i class={`fas ${p.icon}`}></i></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>

          <div class="curriculum-block">
            <h3 class="curriculum-title">
              <i class="fas fa-route"></i> 바이브 코딩 커리큘럼
            </h3>
            <ol class="curriculum-list">
              {vibeCoding.curriculum.map((c) => (
                <li class="curriculum-item">
                  <div class="step-num">{c.step}</div>
                  <div class="step-body">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div class="vibe-quote">
            <i class="fas fa-quote-left"></i>
            <p>
              "코드를 배울 시간이 없다면,<br/>
              <strong>코드와 대화하는 법</strong>을 배우세요. <br />
              그것이 바이브 코딩입니다."
            </p>
            <span class="quote-author">— 오원석 박사</span>
          </div>
        </div>
      </section>

      {/* =============== Contact =============== */}
      <section id="contact" class="contact-section">
        <div class="container">
          <div class="contact-inner">
            <div class="contact-left">
              <span class="section-tag light">CONTACT</span>
              <h2 class="section-title">강의 · 자문 문의</h2>
              <p class="section-sub">
                기업 맞춤 교육, 임직원 리터러시, 바이브 코딩 워크숍, 집필·칼럼·자문까지.
                언제든지 편하게 연락 주세요.
              </p>

              <ul class="contact-list">
                <li>
                  <i class="fas fa-envelope"></i>
                  <div>
                    <span class="contact-label">이메일</span>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </div>
                </li>
                <li>
                  <i class="fas fa-mobile-alt"></i>
                  <div>
                    <span class="contact-label">전화</span>
                    <a href={`tel:${profile.phone.replace(/-/g,'')}`}>{profile.phone}</a>
                  </div>
                </li>
                <li>
                  <i class="fas fa-briefcase"></i>
                  <div>
                    <span class="contact-label">소속</span>
                    <span>바른AI · 디지털융합교육원 · 전북대 평생교육원</span>
                  </div>
                </li>
              </ul>
            </div>

            <form class="contact-form" id="contact-form">
              <h3>빠른 문의 남기기</h3>
              <div class="form-row">
                <label>이름
                  <input type="text" name="name" required placeholder="홍길동" />
                </label>
                <label>연락처
                  <input type="text" name="phone" placeholder="010-0000-0000" />
                </label>
              </div>
              <label>이메일
                <input type="email" name="email" required placeholder="email@company.com" />
              </label>
              <label>문의 주제
                <select name="topic">
                  <option>생성형 AI 업무 효율화 강의</option>
                  <option>바이브 코딩 워크숍</option>
                  <option>AI 리터러시 / AX 혁신 강연</option>
                  <option>임직원 맞춤 교육 프로그램</option>
                  <option>칼럼 · 자문 · 집필</option>
                  <option>기타</option>
                </select>
              </label>
              <label>메세지
                <textarea name="message" rows={4} placeholder="원하시는 강의 주제, 일정, 대상 인원 등을 자유롭게 적어주세요." required></textarea>
              </label>
              <button type="submit" class="btn-primary btn-block">
                <i class="fas fa-paper-plane"></i> 문의 보내기
              </button>
              <p class="form-status" id="form-status"></p>
            </form>
          </div>
        </div>
      </section>

      {/* =============== Footer =============== */}
      <footer class="site-footer">
        <div class="container footer-inner">
          <div class="footer-brand">
            <div class="logo-mark">ResearchAi</div>
            <p>오원석 박사 · 생성형 AI · 바이브 코딩 전문 강사</p>
          </div>
          <div class="footer-links">
            <a href="#about">소개</a>
            <a href="#career">약력</a>
            <a href="#books">저서</a>
            <a href="#vibe">바이브 코딩</a>
            <a href="#contact">문의</a>
          </div>
          <div class="footer-copy">
            © 2025 Dr. Wonseok Oh · 바른AI. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  )
})

// ============================================================
// API: Contact form (mock — 추후 이메일/DB 연동 가능)
// ============================================================
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, message } = body
    if (!name || !email || !message) {
      return c.json({ ok: false, error: '필수 항목이 비어있습니다.' }, 400)
    }
    // TODO: 이메일 전송 또는 KV/D1 저장 연동
    console.log('[Contact]', body)
    return c.json({ ok: true, message: '문의가 접수되었습니다. 빠르게 연락드리겠습니다.' })
  } catch (err) {
    return c.json({ ok: false, error: '요청 처리 중 오류가 발생했습니다.' }, 500)
  }
})

export default app
