import { useEffect, useState } from 'react'

export function useTimezoneClock(timeZone: string) {
  const [time, setTime] = useState(() => formatTime(timeZone))

  useEffect(() => {
    const tick = () => setTime(formatTime(timeZone))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return time
}

function formatTime(timeZone: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}
