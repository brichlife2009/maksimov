import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { Work } from '../components/Work'
import { useReveal } from '../hooks/useReveal'

export function HomePage() {
  useReveal()

  return (
    <>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
    </>
  )
}
