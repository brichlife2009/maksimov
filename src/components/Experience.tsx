import { experience } from '../data/content'

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__label">Experience</div>
      <h2 className="section__title">Опыт</h2>

      <ul className="experience__list">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="experience__item">
            <div className="experience__main">
              <h3>{job.company}</h3>
              <p>{job.role}</p>
            </div>
            <div className="experience__side">
              <time>{job.period}</time>
              <div className="experience__tags">
                {job.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
