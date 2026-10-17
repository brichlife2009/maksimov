import { Link } from 'react-router-dom'
import { projects } from '../data/content'
import { caseStudies } from '../data/projects'
import { ProjectMock } from './ProjectMock'
import { ScreenFrame } from './ScreenFrame'

export function Work() {
  return (
    <section className="section work" id="work">
      <div className="section__label">Work</div>
      <h2 className="section__title">Проекты</h2>
      <p className="section__lead">
        Кейсы из коммерческой разработки. У готовых проектов можно открыть подробности и экраны.
      </p>

      <ul className="work__list">
        {projects.map((project, index) => {
          const caseStudy = caseStudies.find((item) => item.slug === project.slug)
          const content = (
            <>
              <div className="work__media">
                {caseStudy ? (
                  <ScreenFrame
                    src={caseStudy.cover}
                    alt={caseStudy.title}
                    variant="card"
                  />
                ) : (
                  <ProjectMock project={project} />
                )}
              </div>
              <div className="work__body">
                <div className="work__meta">
                  <span>0{index + 1}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="work__role">{project.role}</p>
                <p className="work__summary">{project.summary}</p>
                <div className="work__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
                <div className="work__stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                {caseStudy ? (
                  <span className="work__cta">Смотреть кейс →</span>
                ) : null}
              </div>
            </>
          )

          return (
            <li key={project.id} className="reveal">
              {caseStudy ? (
                <Link className="work__item work__item--link" to={`/work/${caseStudy.slug}`}>
                  {content}
                </Link>
              ) : (
                <div className="work__item">{content}</div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
