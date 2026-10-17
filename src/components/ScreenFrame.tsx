type Props = {
  src: string
  alt: string
  priority?: boolean
  variant?: 'hero' | 'gallery' | 'card' | 'phone'
}

export function ScreenFrame({ src, alt, priority = false, variant = 'gallery' }: Props) {
  return (
    <div className={`screen-frame screen-frame--${variant}`}>
      <div className="screen-frame__stage">
        <div className="screen-frame__device">
          <div className="screen-frame__bezel">
            <img
              src={src}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
