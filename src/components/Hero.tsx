import { profile } from '../data/content'
import { useTimezoneClock } from '../hooks/useTimezoneClock'

const codeLines: { n: number; parts: { t: string; c?: string }[] }[] = [
  {
    n: 1,
    parts: [
      { t: 'import', c: 'kw' },
      { t: ' { useState } ', c: 'plain' },
      { t: 'from', c: 'kw' },
      { t: " 'react'", c: 'str' },
    ],
  },
  {
    n: 2,
    parts: [
      { t: 'import', c: 'kw' },
      { t: ' Image ', c: 'plain' },
      { t: 'from', c: 'kw' },
      { t: " 'next/image'", c: 'str' },
    ],
  },
  { n: 3, parts: [] },
  {
    n: 4,
    parts: [
      { t: 'export', c: 'kw' },
      { t: ' ', c: 'plain' },
      { t: 'default', c: 'kw' },
      { t: ' ', c: 'plain' },
      { t: 'function', c: 'kw' },
      { t: ' ', c: 'plain' },
      { t: 'Dashboard', c: 'fn' },
      { t: '() {', c: 'plain' },
    ],
  },
  {
    n: 5,
    parts: [
      { t: '  const', c: 'kw' },
      { t: ' [agents, setAgents] = ', c: 'plain' },
      { t: 'useState', c: 'fn' },
      { t: '<', c: 'plain' },
      { t: 'Agent', c: 'type' },
      { t: '[]>([])', c: 'plain' },
    ],
  },
  { n: 6, parts: [] },
  {
    n: 7,
    parts: [
      { t: '  return', c: 'kw' },
      { t: ' (', c: 'plain' },
    ],
  },
  {
    n: 8,
    parts: [
      { t: '    <', c: 'plain' },
      { t: 'main', c: 'tag' },
      { t: ' ', c: 'plain' },
      { t: 'className', c: 'attr' },
      { t: '=', c: 'plain' },
      { t: '"matchbox"', c: 'str' },
      { t: '>', c: 'plain' },
    ],
  },
  {
    n: 9,
    parts: [
      { t: '      <', c: 'plain' },
      { t: 'Header', c: 'comp' },
      { t: ' ', c: 'plain' },
      { t: 'title', c: 'attr' },
      { t: '=', c: 'plain' },
      { t: '"B2B Network"', c: 'str' },
      { t: ' />', c: 'plain' },
    ],
  },
  {
    n: 10,
    parts: [
      { t: '      <', c: 'plain' },
      { t: 'AgentTable', c: 'comp' },
      { t: ' ', c: 'plain' },
      { t: 'data', c: 'attr' },
      { t: '={agents} ', c: 'plain' },
      { t: 'onChange', c: 'attr' },
      { t: '={setAgents} />', c: 'plain' },
    ],
  },
  {
    n: 11,
    parts: [
      { t: '    </', c: 'plain' },
      { t: 'main', c: 'tag' },
      { t: '>', c: 'plain' },
    ],
  },
  {
    n: 12,
    parts: [{ t: '  )', c: 'plain' }],
  },
  {
    n: 13,
    parts: [{ t: '}', c: 'plain' }],
  },
]

export function Hero() {
  const time = useTimezoneClock(profile.timezone)

  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="hero__atmosphere" aria-hidden />

      <div className="hero__content">
        <p className="hero__meta">
          <span>{profile.location}</span>
          <span className="hero__dot" aria-hidden />
          <span>TIME ZONE {time}</span>
        </p>

        <h1 id="hero-name" className="hero__name">
          {profile.name}
        </h1>

        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="#work">
            Смотреть проекты
          </a>
          <a className="btn btn--ghost" href="#contact">
            Связаться
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-hidden>
        <div className="hero__monitor">
          <div className="hero__bezel">
            <div className="hero__screen">
              <div className="hero__editor">
                <div className="hero__editor-chrome">
                  <div className="hero__traffic">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="hero__tabs">
                    <span className="hero__tab hero__tab--active">
                      <i className="hero__file-icon" />
                      page.tsx
                    </span>
                    <span className="hero__tab">layout.tsx</span>
                  </div>
                </div>

                <div className="hero__editor-body">
                  <aside className="hero__sidebar">
                    <b />
                    <b />
                    <b />
                    <b />
                    <b className="hero__sidebar-active" />
                    <b />
                  </aside>

                  <div className="hero__code">
                    <div className="hero__breadcrumb">
                      <span>app</span>
                      <em>/</em>
                      <span>dashboard</span>
                      <em>/</em>
                      <span>page.tsx</span>
                    </div>
                    <pre className="hero__pre">
                      {codeLines.map((line) => (
                        <div className="hero__line" key={line.n}>
                          <span className="hero__ln">{line.n}</span>
                          <code>
                            {line.parts.length === 0 ? (
                              <span className="tok-plain">{'\u00a0'}</span>
                            ) : (
                              line.parts.map((part, i) => (
                                <span key={i} className={part.c ? `tok-${part.c}` : 'tok-plain'}>
                                  {part.t}
                                </span>
                              ))
                            )}
                          </code>
                        </div>
                      ))}
                      <div className="hero__cursor-line">
                        <span className="hero__ln" />
                        <span className="hero__caret" />
                      </div>
                    </pre>
                  </div>
                </div>

                <div className="hero__statusbar">
                  <span>TypeScript React</span>
                  <span>Next.js</span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__chin" />
          <div className="hero__stand" />
          <div className="hero__base" />
        </div>
      </div>
    </section>
  )
}
