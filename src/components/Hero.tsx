import { profile } from '../data/content'
import { useTimezoneClock } from '../hooks/useTimezoneClock'

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
        <div className="hero__plane">
          <div className="hero__plane-grid" />
          <div className="hero__plane-window">
            <div className="hero__plane-sidebar" />
            <div className="hero__plane-panels">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
