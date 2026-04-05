import { useMemo, useState, useEffect, useRef } from 'react'

function StarsBg() {
  const stars = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: Math.random() * 92,
      left: Math.random() * 100,
      size: 1.5 + Math.random() * 1.5,
      duration: 2.5 + Math.random() * 3.5,
      delay: -(Math.random() * 5),
    }))
  , [])

  const [meteor, setMeteor] = useState(null)
  const countRef = useRef(0)

  useEffect(() => {
    const fire = () => {
      const isLTR = countRef.current % 2 === 0
      countRef.current++

      setMeteor({
        key: Date.now(),
        ltr: isLTR,
        top: Math.random() * 4,          // near top edge
        left: isLTR
          ? Math.random() * 5            // top-left corner
          : 92 + Math.random() * 5,      // top-right corner
      })
      setTimeout(() => setMeteor(null), 2500)
    }

    // First meteor fires after 3s so it's visible on load
    const first = setTimeout(fire, 3000)
    const interval = setInterval(fire, 45000)
    return () => { clearTimeout(first); clearInterval(interval) }
  }, [])

  return (
    <div className="stars-bg">
      {stars.map(s => (
        <span
          key={s.id}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {meteor && (
        <span
          key={meteor.key}
          className={meteor.ltr ? 'meteor meteor-ltr' : 'meteor meteor-rtl'}
          style={{ top: `${meteor.top}%`, left: `${meteor.left}%` }}
        />
      )}
    </div>
  )
}

export default StarsBg
