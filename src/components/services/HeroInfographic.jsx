'use client'

import { useRef, useEffect, useState } from 'react'

const services = [
  { label: 'Display', color: '#13e195', x: 50, y: 20 },
  { label: 'Video', color: '#8B5CF6', x: 85, y: 40 },
  { label: 'CTV', color: '#FF69B4', x: 75, y: 75 },
  { label: 'Native', color: '#F97316', x: 40, y: 80 },
  { label: 'Mobile', color: '#13e195', x: 15, y: 55 },
  { label: 'DOOH', color: '#8B5CF6', x: 25, y: 25 },
]

const floatingMetrics = [
  { value: '99.9%', label: 'Uptime', x: 60, y: 10 },
  { value: '15ms', label: 'Latency', x: 90, y: 15 },
  { value: '50M+', label: 'Daily Reach', x: 10, y: 40 },
  { value: '12x', label: 'ROAS', x: 80, y: 90 },
  { value: '24/7', label: 'Monitoring', x: 5, y: 70 },
]

// Draw SVG-style icons on canvas
function drawIcon(ctx, iconType, x, y, size, color) {
  ctx.save()
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = 2
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  switch (iconType) {
    case 'display': // Monitor
      ctx.beginPath()
      ctx.rect(x - size / 2, y - size / 3, size, size * 0.7)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x - size / 4, y + size / 2 * 0.7)
      ctx.lineTo(x + size / 4, y + size / 2 * 0.7)
      ctx.stroke()
      break

    case 'video': // Play button
      ctx.beginPath()
      ctx.moveTo(x - size / 3, y - size / 3)
      ctx.lineTo(x + size / 3, y)
      ctx.lineTo(x - size / 3, y + size / 3)
      ctx.closePath()
      ctx.fill()
      break

    case 'ctv': // TV
      ctx.beginPath()
      ctx.rect(x - size / 2, y - size / 3, size, size * 0.6)
      ctx.stroke()
      // Stand
      ctx.beginPath()
      ctx.moveTo(x - size / 4, y + size / 3 * 0.6)
      ctx.lineTo(x + size / 4, y + size / 3 * 0.6)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x, y + size / 3 * 0.6)
      ctx.lineTo(x, y + size / 2)
      ctx.stroke()
      break

    case 'native': // Document
      ctx.beginPath()
      ctx.rect(x - size / 3, y - size / 3, size * 0.66, size * 0.66)
      ctx.stroke()
      // Lines
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.moveTo(x - size / 5, y - size / 6 + i * size / 5)
        ctx.lineTo(x + size / 5, y - size / 6 + i * size / 5)
        ctx.stroke()
      }
      break

    case 'mobile': // Phone
      ctx.beginPath()
      ctx.rect(x - size / 3, y - size / 2 * 0.8, size * 0.66, size * 0.8)
      ctx.stroke()
      // Screen
      ctx.beginPath()
      ctx.rect(x - size / 4, y - size / 4, size / 2, size / 3)
      ctx.stroke()
      // Home button
      ctx.beginPath()
      ctx.arc(x, y + size / 4, size / 8, 0, Math.PI * 2)
      ctx.stroke()
      break

    case 'dooh': // Billboard
      // Post
      ctx.beginPath()
      ctx.moveTo(x, y + size / 2)
      ctx.lineTo(x, y - size / 6)
      ctx.stroke()
      // Sign
      ctx.beginPath()
      ctx.rect(x - size / 3, y - size / 2, size * 0.66, size * 0.66)
      ctx.stroke()
      break
  }
  ctx.restore()
}

function drawNode(ctx, x, y, radius, color, iconType) {
  ctx.save()
  // Circle background
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.fillStyle = color + '20'
  ctx.fill()
  ctx.strokeStyle = color + '40'
  ctx.lineWidth = 1.5
  ctx.stroke()

  // Draw icon
  drawIcon(ctx, iconType, x, y, radius * 1.2, color)
  ctx.restore()
}

function drawText(ctx, text, x, y, fontSize, color, align = 'center') {
  ctx.save()
  ctx.font = `bold ${fontSize}px system-ui, sans-serif`
  ctx.fillStyle = color
  ctx.textAlign = align
  ctx.textBaseline = 'middle'
  ctx.fillText(text, x, y)
  ctx.restore()
}

function drawLine(ctx, x1, y1, x2, y2, color, width = 1.5, opacity = 0.15) {
  ctx.save()
  ctx.globalAlpha = opacity
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = width
  ctx.stroke()
  ctx.restore()
}

function drawBeam(ctx, x1, y1, x2, y2, color, progress) {
  const currentX = x1 + (x2 - x1) * progress
  const currentY = y1 + (y2 - y1) * progress

  ctx.save()
  ctx.shadowColor = color
  ctx.shadowBlur = 10

  // Beam line
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(currentX, currentY)
  ctx.strokeStyle = color
  ctx.lineWidth = 3
  ctx.lineCap = 'round'
  ctx.stroke()

  // Dot at head
  ctx.beginPath()
  ctx.arc(currentX, currentY, 5, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
  ctx.restore()
}

export default function HeroInfographic() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const updateSize = () => {
      const parent = canvas.parentElement
      const width = parent.offsetWidth
      const height = parent.offsetHeight
      canvas.width = width
      canvas.height = height
      setDimensions({ width, height })
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0) return

    const ctx = canvas.getContext('2d')
    const { width, height } = dimensions
    const centerX = width / 2
    const centerY = height / 2

    const scaleX = width / 100
    const scaleY = height / 100

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Background orbs
      const time = Date.now() / 1000
      const orb1Scale = 1 + 0.3 * Math.sin(time * 0.8)
      const orb2Scale = 1 + 0.2 * Math.sin(time * 0.6 + 2)

      ctx.save()
      ctx.globalAlpha = 0.1
      const grad1 = ctx.createRadialGradient(40, 40, 0, 40, 40, 128 * orb1Scale)
      grad1.addColorStop(0, '#13e195')
      grad1.addColorStop(1, 'transparent')
      ctx.fillStyle = grad1
      ctx.fillRect(0, 0, 256 * orb1Scale, 256 * orb1Scale)

      const grad2 = ctx.createRadialGradient(width - 40, height - 40, 0, width - 40, height - 40, 160 * orb2Scale)
      grad2.addColorStop(0, '#8B5CF6')
      grad2.addColorStop(1, 'transparent')
      ctx.fillStyle = grad2
      ctx.fillRect(width - 320 * orb2Scale, height - 320 * orb2Scale, 320 * orb2Scale, 320 * orb2Scale)
      ctx.restore()

      // Central Hub
      const pulseTime = Date.now() / 1000
      const pulse1 = 1 + 0.8 * (0.5 + 0.5 * Math.sin(pulseTime * 2))
      const pulse2 = 1 + 1.2 * (0.3 + 0.3 * Math.sin(pulseTime * 2 + 1))

      ctx.save()
      ctx.shadowColor = '#13e195'
      ctx.shadowBlur = 60
      const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 48)
      grad.addColorStop(0, '#34d399')
      grad.addColorStop(1, '#059669')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(centerX, centerY, 48, 0, Math.PI * 2)
      ctx.fill()

      // Click icon in center (mouse cursor SVG-style)
      ctx.save()
      ctx.strokeStyle = '#ffffff'
      ctx.fillStyle = '#ffffff'
      ctx.lineWidth = 2.5
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      const cursorSize = 16
      const cx = centerX
      const cy = centerY

      // Draw cursor arrow
      ctx.beginPath()
      ctx.moveTo(cx - cursorSize / 2, cy - cursorSize / 2)
      ctx.lineTo(cx + cursorSize / 2, cy)
      ctx.lineTo(cx - cursorSize / 2, cy + cursorSize / 2)
      ctx.closePath()
      ctx.fill()

      // Draw cursor line (click indicator)
      ctx.beginPath()
      ctx.moveTo(cx - cursorSize / 2 + 2, cy + cursorSize / 2 + 3)
      ctx.lineTo(cx - cursorSize / 2 - 4, cy + cursorSize / 2 + 9)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(cx - cursorSize / 2 - 4, cy + cursorSize / 2 + 9)
      ctx.lineTo(cx - cursorSize / 2 + 2, cy + cursorSize / 2 + 9)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(cx - cursorSize / 2 - 4, cy + cursorSize / 2 + 9)
      ctx.lineTo(cx - cursorSize / 2 - 4, cy + cursorSize / 2 + 3)
      ctx.stroke()
      ctx.restore()

      // Pulse rings
      ctx.save()
      ctx.globalAlpha = 0.5 - 0.5 * Math.abs(Math.sin(pulseTime * 2))
      ctx.beginPath()
      ctx.arc(centerX, centerY, 48 * pulse1, 0, Math.PI * 2)
      ctx.strokeStyle = '#13e19580'
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.globalAlpha = 0.3 - 0.3 * Math.abs(Math.sin(pulseTime * 2 + 1))
      ctx.beginPath()
      ctx.arc(centerX, centerY, 48 * pulse2, 0, Math.PI * 2)
      ctx.strokeStyle = '#13e19550'
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.restore()

      // Sequential beam around services ring
      const totalServices = services.length
      const cycleDuration = totalServices * 1.5 // 1.5s per segment
      const elapsed = (Date.now() / 1000) % cycleDuration
      const currentSegment = Math.floor(elapsed / 1.5)
      const segmentProgress = (elapsed % 1.5) / 1.5

      const beamStartIdx = currentSegment % totalServices
      const beamEndIdx = (beamStartIdx + 1) % totalServices

      const x1 = services[beamStartIdx].x * scaleX
      const y1 = services[beamStartIdx].y * scaleY
      const x2 = services[beamEndIdx].x * scaleX
      const y2 = services[beamEndIdx].y * scaleY

      // Draw all base lines
      services.forEach((svc, idx) => {
        const nextIdx = (idx + 1) % totalServices
        const lx1 = svc.x * scaleX
        const ly1 = svc.y * scaleY
        const lx2 = services[nextIdx].x * scaleX
        const ly2 = services[nextIdx].y * scaleY
        drawLine(ctx, lx1, ly1, lx2, ly2, '#8B5CF6', 1.5, 0.15)
      })

      // Draw current beam
      drawBeam(ctx, x1, y1, x2, y2, '#a78bfa', segmentProgress)

      // Sequential beam for metrics ring
      const totalMetrics = floatingMetrics.length
      const metricsCycleDuration = totalMetrics * 1.5
      const metricsElapsed = (Date.now() / 1000 + 1.2) % metricsCycleDuration
      const metricsSegment = Math.floor(metricsElapsed / 1.5)
      const metricsProgress = (metricsElapsed % 1.5) / 1.5

      const mBeamStartIdx = metricsSegment % totalMetrics
      const mBeamEndIdx = (mBeamStartIdx + 1) % totalMetrics

      const mx1 = floatingMetrics[mBeamStartIdx].x * scaleX
      const my1 = floatingMetrics[mBeamStartIdx].y * scaleY
      const mx2 = floatingMetrics[mBeamEndIdx].x * scaleX
      const my2 = floatingMetrics[mBeamEndIdx].y * scaleY

      // Draw all base lines for metrics
      floatingMetrics.forEach((metric, idx) => {
        const nextIdx = (idx + 1) % totalMetrics
        const lx1 = metric.x * scaleX
        const ly1 = metric.y * scaleY
        const lx2 = floatingMetrics[nextIdx].x * scaleX
        const ly2 = floatingMetrics[nextIdx].y * scaleY
        drawLine(ctx, lx1, ly1, lx2, ly2, '#F97316', 1.5, 0.12)
      })

      // Draw current beam for metrics
      drawBeam(ctx, mx1, my1, mx2, my2, '#fb923c', metricsProgress)

      // Radial connectors to center
      services.forEach((svc) => {
        const x1 = svc.x * scaleX
        const y1 = svc.y * scaleY
        drawLine(ctx, centerX, centerY, x1, y1, svc.color, 1.5, 0.2)
      })

      // Draw service nodes with SVG icons
      const iconTypes = ['display', 'video', 'ctv', 'native', 'mobile', 'dooh']
      services.forEach((svc, idx) => {
        const x = svc.x * scaleX
        const y = svc.y * scaleY
        const floatOffset = -8 * Math.sin(Date.now() / 1000 * (3 + idx * 0.5) + idx)
        drawNode(ctx, x, y + floatOffset, 24, svc.color, iconTypes[idx])
        drawText(ctx, svc.label, x, y + floatOffset + 32, 10, '#374151')
      })

      // Draw metric nodes
      floatingMetrics.forEach((metric, idx) => {
        const x = metric.x * scaleX
        const y = metric.y * scaleY
        const floatOffset = -6 * Math.sin(Date.now() / 1000 * (4 + idx * 0.3) + idx)
        ctx.save()
        ctx.globalAlpha = 0.8
        ctx.fillStyle = '#ffffff80'
        ctx.strokeStyle = '#e5e7eb80'
        ctx.lineWidth = 1
        const px = x - 30
        const py = y + floatOffset - 16
        const pw = 60
        const ph = 32
        ctx.beginPath()
        ctx.roundRect(px, py, pw, ph, 8)
        ctx.fill()
        ctx.stroke()
        ctx.restore()

        drawText(ctx, metric.value, x, y + floatOffset - 4, 11, '#059669', 'center')
        drawText(ctx, metric.label, x, y + floatOffset + 8, 8, '#6b7280', 'center')
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions])

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  )
}
