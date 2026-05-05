'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const SHAPE_COLORS = {
  blue: {
    border: 'rgba(59, 130, 246, 0.4)',
    bg: 'rgba(59, 130, 246, 0.08)',
    shadow: 'rgba(59, 130, 246, 0.15)',
  },
  emerald: {
    border: 'rgba(16, 185, 129, 0.4)',
    bg: 'rgba(16, 185, 129, 0.08)',
    shadow: 'rgba(16, 185, 129, 0.15)',
  },
  pink: {
    border: 'rgba(255, 105, 180, 0.4)',
    bg: 'rgba(255, 105, 180, 0.08)',
    shadow: 'rgba(255, 105, 180, 0.15)',
  },
  purple: {
    border: 'rgba(139, 92, 246, 0.4)',
    bg: 'rgba(139, 92, 246, 0.08)',
    shadow: 'rgba(139, 92, 246, 0.15)',
  },
  orange: {
    border: 'rgba(249, 115, 22, 0.4)',
    bg: 'rgba(249, 115, 22, 0.08)',
    shadow: 'rgba(249, 115, 22, 0.15)',
  },
}

function CubeShape({ size = 60, color = 'blue', rotate = { x: -20, y: 30 } }) {
  const c = SHAPE_COLORS[color]
  const half = size / 2
  const faceStyle = {
    position: 'absolute',
    width: size,
    height: size,
    border: `2px solid ${c.border}`,
    background: c.bg,
    borderRadius: 3,
    backfaceVisibility: 'visible',
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      <div style={{ ...faceStyle, transform: `translateZ(${half}px)` }} />
      <div style={{ ...faceStyle, transform: `rotateY(180deg) translateZ(${half}px)` }} />
      <div style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${half}px)` }} />
      <div style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
      <div style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${half}px)` }} />
      <div style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${half}px)` }} />
    </div>
  )
}

function DonutShape({ size = 80, thickness = 12, color = 'blue', rotate = { x: 30, y: 30, z: 0 } }) {
  const c = SHAPE_COLORS[color]
  const radius = size / 2

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `${thickness}px solid ${c.border}`,
        background: c.bg,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotateZ(${rotate.z}deg)`,
      }}
    />
  )
}

function PyramidShape({ size = 60, color = 'blue', rotate = { x: -15, y: 30 } }) {
  const c = SHAPE_COLORS[color]
  const half = size / 2
  const height = size * 0.85
  const mid = height / 2

  return (
    <div
      style={{
        width: size,
        height: height,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      <div style={{
        position: 'absolute',
        width: size,
        height: size,
        border: `2px solid ${c.border}`,
        borderBottom: `2px solid ${c.border}`,
        background: c.bg,
        transform: `rotateX(30deg)`,
      }} />
      <div style={{
        position: 'absolute',
        width: size,
        height: size,
        border: `2px solid ${c.border}`,
        borderBottom: `2px solid ${c.border}`,
        background: c.bg,
        transform: `rotateX(-30deg)`,
      }} />
    </div>
  )
}

function BlobShape({ size = 400, color = 'blue', opacity = 1 }) {
  const c = SHAPE_COLORS[color]

  const clampedOpacity = Math.min(Math.max(opacity, 0.75), 1)
  const cssOpacity = Math.min(clampedOpacity, 1)
  const brightness = clampedOpacity > 1 ? clampedOpacity : 1

  return (
    <div
      style={{
        position: 'absolute',
        width: size * 2,
        height: size * 2,
        borderRadius: '50%',
        background: `radial-gradient(circle at center, ${c.bg} 0%, transparent 70%)`,
        filter: `blur(${size / 4}px)`,
        opacity: cssOpacity,
        transform: `scale(${brightness})`,
      }}
    />
  )
}

function GradientOrb({ x = 0, y = 0, size = 300, color = 'blue' }) {
  const c = SHAPE_COLORS[color]

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${c.bg} 0%, transparent 70%)`,
        filter: 'blur(40px)',
        x: -size / 2,
        y: -size / 2,
      }}
    />
  )
}

function DottedPattern({ mousePos }) {
  const offsetX = mousePos.isInSection ? (mousePos.x - window.innerWidth / 2) * 0.02 : 0
  const offsetY = mousePos.isInSection ? (mousePos.y - window.innerHeight / 2) * 0.02 : 0
  
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `radial-gradient(var(--text-muted) 1px, transparent 1px)`,
        backgroundSize: `${24 + offsetX}px ${24 + offsetY}px`,
        opacity: 0.08,
        pointerEvents: 'none',
      }}
    />
  )
}

function StarsPattern({ mousePos }) {
  const offsetX = mousePos.isInSection ? (mousePos.x - window.innerWidth / 2) * 0.03 : 0
  const offsetY = mousePos.isInSection ? (mousePos.y - window.innerHeight / 2) * 0.03 : 0
  
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(var(--text-muted) 5px, transparent 5px),
                         linear-gradient(var(--text-muted) 5px, transparent 5px)`,
        backgroundSize: `${48 + offsetX}px ${48 + offsetY}px, ${36 + offsetX}px ${36 + offsetY}px`,
        backgroundPosition: `0 0, ${16 + offsetX}px ${16 + offsetY}px`,
        opacity: 0.05,
        pointerEvents: 'none',
      }}
    />
  )
}

function CursorTrail({ mousePos }) {
  const trailX = mousePos.isInSection ? mousePos.x : 0
  const trailY = mousePos.isInSection ? mousePos.y : 0
  
  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: trailX,
          top: trailY,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--primary)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0.8,
          boxShadow: '0 0 20px rgba(255, 105, 180, 0.5), 0 0 40px rgba(139, 92, 246, 0.5)',
        }}
        className="cursor-trail"
      />
      <div
        style={{
          position: 'fixed',
          left: trailX,
          top: trailY,
          width: 24,
          height: 24,
          borderRadius: '50%',
          border: '2px solid rgba(139, 92, 246, 0.6)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.4,
        }}
        className="cursor-trail-ring"
      />
      <div
        style={{
          position: 'fixed',
          left: trailX,
          top: trailY,
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: '1px dashed var(--text-muted)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9997,
          opacity: 0.2,
        }}
        className="cursor-trail-dashed"
      />
    </>
  )
}

export default function FloatingShapes({ shapes = [], patternType = null }) {
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isInSection: false })
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [orbs, setOrbs] = useState(() =>
    shapes.filter(s => s.type === 'blob').map(() => ({ x: 0, y: 0 }))
  )
  const [shapePositions, setShapePositions] = useState(() =>
    shapes.filter(s => s.type !== 'blob').map(() => ({ rotateX: 0, rotateY: 0, scale: 1 }))
  )

  
useEffect(() => {
  const handleMouseMove = (e) => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePos({ x, y, isInSection: true })
      setParallax({
        x: ((x / (rect.width || 1)) - 0.5) * 60,
        y: ((y / (rect.height || 1)) - 0.5) * 60,
      })

      setOrbs((prev) =>
        prev.map((orb, i) => ({
          x: (x - rect.width / 2) * 0.3 + (i % 2 === 0 ? -100 : 100),
          y: (y - rect.height / 2) * 0.3 + (i % 2 === 0 ? -50 : 50),
        }))
      )

      setShapePositions((prev) =>
        prev.map((pos, i) => {
          const depth = shapes.filter(s => s.type !== 'blob')[i]?.depth || 0.2
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const deltaX = (x - centerX) / centerX
          const deltaY = (y - centerY) / centerY
          return {
            rotateX: -deltaY * 20 * depth,
            rotateY: deltaX * 20 * depth,
            scale: 1 + depth * 0.1,
          }
        })
      )
    }

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0, isInSection: false })
      setParallax({ x: 0, y: 0 })
      setOrbs((prev) =>
        prev.map((orb, i) => ({
          x: 0,
          y: 0,
        }))
      )
      setShapePositions(shapes.filter(s => s.type !== 'blob').map(() => ({ rotateX: 0, rotateY: 0, scale: 1 })))
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [shapes])

  useEffect(() => {
    let animationId
    const animate = () => {
      setOrbs((prev) =>
        prev.map((orb, i) => {
          const targetX = mousePos.isInSection ? (mousePos.x - window.innerWidth / 2) * 0.2 : 0
          const targetY = mousePos.isInSection ? (mousePos.y - window.innerHeight / 2) * 0.2 : 0
          return {
            x: orb.x + (targetX - orb.x) * 0.05,
            y: orb.y + (targetY - orb.y) * 0.05,
          }
        })
      )
      animationId = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [mousePos.isInSection, mousePos.x, mousePos.y])

  // Compute parallax movement using state, not ref in render
  const [containerDims, setContainerDims] = useState({ width: 1, height: 1 })
  
  useEffect(() => {
    function updateDims() {
      if (containerRef.current) {
        setContainerDims({
          width: containerRef.current.offsetWidth || 1,
          height: containerRef.current.offsetHeight || 1,
        })
      }
    }
    updateDims()
    window.addEventListener('resize', updateDims)
    return () => window.removeEventListener('resize', updateDims)
  }, [])

  // Remove problematic effect; handle in event
  // No-op here, event handler below will setParallax instead

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        perspective: '1000px',
      }}
    >
      {patternType === 'dotted' && <DottedPattern mousePos={mousePos} />}
      {patternType === 'stars' && <StarsPattern mousePos={mousePos} />}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {orbs.map((orb, i) => (
          <GradientOrb
            key={i}
            x={orb.x}
            y={orb.y}
            size={shapes.filter(s => s.type === 'blob')[i]?.size || 300}
            color={shapes.filter(s => s.type === 'blob')[i]?.color || 'blue'}
          />
        ))}
      </div>

      {shapes.filter(s => s.type !== 'blob').map((s, i) => {
        const depth = s.depth || 0.2
        const moveX = parallax.x * depth * 2
        const moveY = parallax.y * depth * 2
        const shapeTransform = shapePositions[i] || { rotateX: 0, rotateY: 0, scale: 1 }

        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              ...s.position,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              x: moveX,
              y: moveY,
              rotateX: shapeTransform.rotateX,
              rotateY: shapeTransform.rotateY,
              scale: shapeTransform.scale,
            }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20,
              mass: 0.5,
            }}
          >
            {s.type === 'cube' && <CubeShape size={s.size} color={s.color} rotate={s.rotate} />}
            {s.type === 'donut' && <DonutShape size={s.size} thickness={s.thickness} color={s.color} rotate={s.rotate} />}
            {s.type === 'pyramid' && <PyramidShape size={s.size} color={s.color} rotate={s.rotate} />}
          </motion.div>
        )
      })}
    </div>
  )
}