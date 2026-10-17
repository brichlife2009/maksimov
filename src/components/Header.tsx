import { Link } from 'react-router-dom'
import { profile } from '../data/content'

const links = [
  { href: '/#about', label: 'О себе' },
  { href: '/#work', label: 'Проекты' },
  { href: '/#experience', label: 'Опыт' },
  { href: '/#contact', label: 'Контакты' },
]

export function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="brand-mark" aria-label="На главную">
        Vm.
      </Link>

      <nav className="site-nav" aria-label="Основная навигация">
        {links.map((link) => (
          <Link key={link.href} to={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <a
        className="btn btn--solid"
        href={profile.telegram}
        target="_blank"
        rel="noreferrer"
      >
        Telegram
      </a>
    </header>
  )
}
