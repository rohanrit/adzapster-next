'use client'

import { useEffect, useRef } from 'react'

export default function BoxesBackground({ className = '' }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const boxes = []
    const boxCount = 50

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const createBoxes = () => {
      boxes.length = 0
      const width = canvas.width
      const height = canvas.height

      for (let i = 0; i < boxCount; i++) {
        const rand = Math.random()
        let color
        if (rand > 0.66) color = '19, 225, 149'
        else if (rand > 0.33) color = '255, 105, 180'
        else color = '139, 92, 246'

        boxes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 30 + 10,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          opacity: Math.random() * 0.15 + 0.05,
          color: color,
        })
      }
    }

    const draw = () => {
      const width = canvas.width
      const height = canvas.height

      ctx.clearRect(0, 0, width, height)

      boxes.forEach((box) => {
        box.x += box.speedX
        box.y += box.speedY
        box.rotation += box.rotationSpeed

        if (box.x < -box.size) box.x = width + box.size
        if (box.x > width + box.size) box.x = -box.size
        if (box.y < -box.size) box.y = height + box.size
        if (box.y > height + box.size) box.y = -box.size

        ctx.save()
        ctx.translate(box.x + box.size / 2, box.y + box.size / 2)
        ctx.rotate(box.rotation)
        ctx.strokeStyle = `rgba(${box.color}, ${box.opacity})`
        ctx.lineWidth = 1.5
        ctx.strokeRect(-box.size / 2, -box.size / 2, box.size, box.size)
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    resizeCanvas()
    createBoxes()
    draw()

    const handleResize = () => {
      resizeCanvas()
      createBoxes()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
