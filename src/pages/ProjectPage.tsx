import { Link, Navigate, useParams } from 'react-router-dom'
import { ScreenFrame } from '../components/ScreenFrame'
import { getCaseStudy } from '../data/projects'
import { useReveal } from '../hooks/useReveal'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getCaseStudy(slug) : undefined
  useReveal()

  if (!project) {
    return <Navigate to="/#work" replace />
  }

  return (
    <article className="case">
      <Link className="case__back" to="/#work">
        ← К проектам
      </Link>

      <header className="case__hero">
        <div className="case__hero-copy">
          <p className="case__eyebrow">
            <span>{project.period}</span>
            <span className="hero__dot" aria-hidden />
            <span>{project.role}</span>
          </p>
          <h1>{project.title}</h1>
          <p className="case__accent">{project.accent}</p>
          <p className="case__summary">{project.summary}</p>
          <div className="case__tags">
            {project.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>

        <ScreenFrame
          src={project.cover}
          alt={`${project.shortTitle} — обложка`}
          priority
          variant="hero"
        />
      </header>

      <section className="case__section reveal">
        <h2>О проекте</h2>
        <ul className="case__overview">
          {project.overview.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="case__section reveal">
        <h2>За что отвечал</h2>
        <ul className="case__list">
          {project.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {project.modules.length > 0 ? (
        <section className="case__section reveal">
          <h2>Модули</h2>
          <div className="case__products">
            {project.modules.map((module) => (
              <div key={module.title} className="case__product">
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="case__section reveal">
        <h2>Сложности</h2>
        <div className="case__challenges">
          {project.challenges.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {project.galleries.map((gallery) => (
        <section key={gallery.title} className="case__section reveal">
          <h2>{gallery.title}</h2>
          <p className="case__section-lead">{gallery.lead}</p>
          <div className="case__gallery">
            {gallery.screens.map((screen) => (
              <figure
                key={screen.src}
                className={`case__shot${screen.frame === 'phone' ? ' case__shot--phone' : ''}`}
              >
                <ScreenFrame
                  src={screen.src}
                  alt={screen.title}
                  variant={screen.frame === 'phone' ? 'phone' : 'gallery'}
                />
                <figcaption>
                  <strong>{screen.title}</strong>
                  <span>{screen.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      <section className="case__section reveal">
        <h2>Стек</h2>
        <ul className="stack__list case__stack">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}
