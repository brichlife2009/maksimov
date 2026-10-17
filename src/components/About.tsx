import { aboutPoints, profile, stack } from '../data/content'

export function About() {
  return (
    <section className="section about" id="about">
      <div className="section__label">About</div>
      <div className="about__grid">
        <div>
          <h2 className="section__title">
            Frontend с продуктовым влиянием
          </h2>
          <p className="about__lead">
            {profile.experienceYears} лет коммерческой разработки. Фокус —
            React / Next.js, сложные сценарии и интерфейсы, которые ускоряют
            работу команд и клиентов.
          </p>
        </div>

        <ul className="about__list">
          {aboutPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="stack">
        <h3 className="stack__title">Стек</h3>
        <ul className="stack__list">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
