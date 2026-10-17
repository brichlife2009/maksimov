import type { CSSProperties } from 'react'
import type { Project } from '../data/content'

const tones: Record<
  Project['mockTone'],
  { panel: string; accent: string; soft: string }
> = {
  teal: {
    panel: '#0F3D3A',
    accent: '#2DD4BF',
    soft: '#134E4A',
  },
  ink: {
    panel: '#1A2332',
    accent: '#7DD3FC',
    soft: '#243447',
  },
  sand: {
    panel: '#3D3428',
    accent: '#F0C987',
    soft: '#4A3F31',
  },
  slate: {
    panel: '#2A3140',
    accent: '#A5B4FC',
    soft: '#353E52',
  },
  olive: {
    panel: '#2C3326',
    accent: '#A3B18A',
    soft: '#3A4333',
  },
}

type Props = {
  project: Project
}

export function ProjectMock({ project }: Props) {
  const tone = tones[project.mockTone]

  return (
    <div
      className="project-mock"
      style={
        {
          '--mock-panel': tone.panel,
          '--mock-accent': tone.accent,
          '--mock-soft': tone.soft,
        } as CSSProperties
      }
      aria-hidden
    >
      <div className="project-mock__chrome">
        <span />
        <span />
        <span />
        <div className="project-mock__url">{project.title}</div>
      </div>
      <div className="project-mock__body">
        <aside className="project-mock__nav">
          <i />
          <i />
          <i />
          <i />
        </aside>
        <div className="project-mock__main">
          <div className="project-mock__bar" />
          <div className="project-mock__grid">
            <div className="project-mock__card project-mock__card--wide" />
            <div className="project-mock__card" />
            <div className="project-mock__card" />
            <div className="project-mock__table">
              <b />
              <b />
              <b />
              <b />
            </div>
          </div>
        </div>
      </div>
      <div className="project-mock__label">UI mock</div>
    </div>
  )
}
