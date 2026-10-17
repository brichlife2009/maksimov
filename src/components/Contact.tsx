import { profile } from '../data/content'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section__label">Contact</div>
      <h2 className="section__title">Давайте сделаем продукт сильнее</h2>
      <p className="section__lead">
        Открыт к удалённой работе. Сейчас в {profile.location}.
      </p>

      <div className="contact__links">
        <a href={profile.telegram} target="_blank" rel="noreferrer">
          Telegram · {profile.telegramHandle}
        </a>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
        <a href={profile.cvUrl} download>
          Скачать CV (PDF)
        </a>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with Vite + React</span>
      </footer>
    </section>
  )
}
