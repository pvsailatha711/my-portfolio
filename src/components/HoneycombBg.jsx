import { useMemo } from 'react'

const R = 30
const HEX_W = R * Math.sqrt(3)   // ~51.96 — flat-to-flat width (pointy-top)
const ROW_H = R * 1.5             // ~45    — center-to-center row distance
const VB_W = 2100
const VB_H = 360

function hexPoints(cx, cy) {
  const pts = []
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 2   // pointy-top, starts at top vertex
    pts.push(`${(cx + R * Math.cos(a)).toFixed(1)},${(cy + R * Math.sin(a)).toFixed(1)}`)
  }
  return pts.join(' ')
}

function HoneycombBg() {
  const { normal, lit } = useMemo(() => {
    const normal = []
    const lit = []
    const cols = Math.ceil(VB_W / HEX_W) + 2
    const rows = Math.ceil(VB_H / ROW_H) + 1

    for (let row = 0; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        // Offset every other row by half a hex width (honeycomb stagger)
        const x = col * HEX_W + (row % 2 === 1 ? HEX_W / 2 : 0) + HEX_W / 2
        const y = row * ROW_H + R

        // Intensity: bright at bottom-center, fades toward top and side edges
        const rowRatio = row / Math.max(rows - 1, 1)
        const distFromCenter = Math.abs(x - VB_W / 2) / (VB_W / 2)
        const rowIntensity = Math.pow(rowRatio, 0.55)
        const colIntensity = 1 - distFromCenter * 0.68
        const intensity = rowIntensity * Math.max(0.18, colIntensity)

        const pts = hexPoints(x, y)

        if (Math.random() < 0.13) {
          lit.push({ pts, intensity })
        } else {
          normal.push({ pts, intensity })
        }
      }
    }
    return { normal, lit }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '33vh',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Standard glow: soft halo around normal hex edges */}
          <filter id="hx-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
            <feComponentTransfer in="blur" result="bright">
              <feFuncA type="linear" slope="2"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="bright"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Strong glow: brighter bloom for lit hexes */}
          <filter id="hx-glow-strong" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5.5" result="blur"/>
            <feComponentTransfer in="blur" result="bright">
              <feFuncA type="linear" slope="3.8"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="bright"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Normal hexes — subtle rose gold edges with soft glow */}
        <g filter="url(#hx-glow)">
          {normal.map((h, i) => (
            <polygon
              key={i}
              points={h.pts}
              fill="none"
              stroke={`rgba(194,132,122,${(h.intensity * 0.44).toFixed(2)})`}
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Lit hexes — brighter edge + faint inner fill + strong bloom */}
        <g filter="url(#hx-glow-strong)">
          {lit.map((h, i) => (
            <polygon
              key={i}
              points={h.pts}
              fill={`rgba(194,132,122,${(h.intensity * 0.09).toFixed(2)})`}
              stroke={`rgba(222,170,160,${(h.intensity * 0.9).toFixed(2)})`}
              strokeWidth="1.5"
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

export default HoneycombBg
