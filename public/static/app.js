// ======================================================
// 오원석 박사 랜딩 페이지 — Interactions
// ======================================================

(function () {
  'use strict'

  // ---------- Navbar scroll effect ----------
  const nav = document.getElementById('top-nav')
  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add('scrolled')
    else nav.classList.remove('scrolled')
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  // ---------- Mobile menu toggle ----------
  const toggle = document.getElementById('nav-toggle')
  const navLinks = document.querySelector('.nav-links')
  if (toggle) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open')
    })
    document.querySelectorAll('.nav-links a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    )
  }

  // ---------- Reveal on scroll ----------
  const revealTargets = document.querySelectorAll(
    '.section-head, .stat-card, .position-card, .edu-block, .book-card, .lecture-card, .pillar-card, .curriculum-item, .about-story, .about-specialty, .contact-list li, .contact-form, .vibe-quote'
  )
  revealTargets.forEach(el => el.classList.add('reveal'))

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  revealTargets.forEach(el => io.observe(el))

  // ---------- Stat number counter ----------
  const statValues = document.querySelectorAll('.stat-value')
  const counterObs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const raw = el.dataset.value || el.textContent
        // only animate numbers
        const match = raw.match(/^(\d+)(\+?)$/)
        if (match) {
          const target = parseInt(match[1], 10)
          const suffix = match[2]
          let current = 0
          const steps = 40
          const inc = Math.max(1, Math.ceil(target / steps))
          const timer = setInterval(() => {
            current += inc
            if (current >= target) { current = target; clearInterval(timer) }
            el.textContent = current + suffix
          }, 30)
        }
        counterObs.unobserve(el)
      })
    },
    { threshold: 0.4 }
  )
  statValues.forEach(el => counterObs.observe(el))

  // ---------- Lecture filter ----------
  const chips = document.querySelectorAll('.chip')
  const lectureCards = document.querySelectorAll('.lecture-card')
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('chip-active'))
      chip.classList.add('chip-active')
      const filter = chip.dataset.filter
      lectureCards.forEach(card => {
        const cat = card.dataset.category
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden')
        } else {
          card.classList.add('hidden')
        }
      })
    })
  })

  // ---------- Contact form ----------
  const form = document.getElementById('contact-form')
  const status = document.getElementById('form-status')
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      status.textContent = '전송 중…'
      status.classList.remove('error')

      const data = Object.fromEntries(new FormData(form).entries())
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        const out = await res.json()
        if (out.ok) {
          status.textContent = '✓ ' + out.message
          form.reset()
        } else {
          status.textContent = '⚠ ' + (out.error || '전송 실패')
          status.classList.add('error')
        }
      } catch (err) {
        status.textContent = '⚠ 네트워크 오류. 이메일(ResearchAi@naver.com)로 직접 연락 주세요.'
        status.classList.add('error')
      }
    })
  }

  // ---------- Smooth anchor offset ----------
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')
      if (id === '#') return
      const target = document.querySelector(id)
      if (target) {
        e.preventDefault()
        const y = target.getBoundingClientRect().top + window.scrollY - 72
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    })
  })

  // ---------- Parallax blobs (subtle) ----------
  const blobs = document.querySelectorAll('.blob')
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20
    const y = (e.clientY / window.innerHeight - 0.5) * 20
    blobs.forEach((b, i) => {
      const s = (i + 1) * 0.5
      b.style.transform = `translate(${x * s}px, ${y * s}px)`
    })
  })
})()
