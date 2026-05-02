'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

function GradientOrb({ x, y, size, color, intensity }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
        opacity: intensity,
        pointerEvents: 'none',
        filter: 'blur(40px)',
        transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        zIndex: 0,
      }}
    />
  )
}

export default function InteractiveSection({ children, className = '', parallaxIntensity = 0.02 }) {
  const sectionRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x:0, y:0, isInSection: false })
  const [parallax, setParallax] = useState({ x:0, y:0 })
  const [orbs, setOrbs] = useState([
    { x:0, y:0, size: 300, color: 'rgba(255, 105, 180, 0.15)', intensity:0.6 },
    { x:0, y:0, size: 400, color: 'rgba(139, 92, 246, 0.12)', intensity:0.5 },
    { x:0, y:0, size: 250, color: 'rgba(249, 115, 22, 0.1)', intensity:0.4 },
  ])

const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return

    const rect = sectionRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePos({ x, y, isInSection: true })
    setParallax({
      x: ((x / (rect.width || 1)) - 0.5) * 100 * parallaxIntensity,
      y: ((y / (rect.height || 1)) - 0.5) * 100 * parallaxIntensity
    })

    setOrbs((prev) => {
      const offset = 100
      return prev.map((orb, i) => {
        const delay = i * 0.1
        const factor = 0.3 + i * 0.2
        return {
          ...orb,
          x: x + Math.sin(Date.now() * 0.001 + i) * offset * factor,
          y: y + Math.cos(Date.now() * 0.001 + i * 1.5) * offset * factor,
        }
      })
    })
  }, [parallaxIntensity])

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x:0, y:0, isInSection: false })
    setParallax({ x:0, y:0 })
    setOrbs((prev) => prev.map(() => ({ x:0, y:0, size: 300, color: 'rgba(255, 105, 180, 0.15)', intensity: 0.3 })))
  }, [])

  useEffect(() => {
    let animationId
    const animate = () => {
      setOrbs((prev) =>
        prev.map((orb, i) => {
          const offset = 80
          const factor = 0.2 + i * 0.15
          return {
            ...orb,
            x: mousePos.isInSection ? mousePos.x + Math.sin(Date.now() * 0.001 + i * 0.5) * offset * factor : 0,
            y: mousePos.isInSection ? mousePos.y + Math.cos(Date.now() * 0.001 + i * 0.7) * offset * factor : 0,
          }
        })
      )
      animationId = requestAnimationFrame(animate)
    }

    if (mousePos.isInSection) {
      animate()
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [mousePos.isInSection, mousePos.x, mousePos.y])

  // Fix: Compute in state, not ref during render
  const [sectionDims, setSectionDims] = useState({ width: 1, height: 1 })
  useEffect(() => {
    function updateDims() {
      if (sectionRef.current) {
        setSectionDims({
          width: sectionRef.current.offsetWidth || 1,
          height: sectionRef.current.offsetHeight || 1
        })
      }
    }
    updateDims();
    window.addEventListener('resize', updateDims);
    return () => window.removeEventListener('resize', updateDims);
  }, [])
  // Remove problematic effect; do this math in the mouseMove event instead.

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
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
            size={orb.size}
            color={orb.color}
            intensity={mousePos.isInSection ? orb.intensity : 0.2}
          />
        ))}
      </div>

      <motion.div
        style={{
          position: 'relative',
          zIndex: 1,
          transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export function ParallaxElement({ children, factor = 0.05, className = '' }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const findSection = (el) => {
      while (el && el.tagName !== 'SECTION') {
        el = el.parentElement
      }
      return el
    }

    const handleMouseMove = (e) => {
      if (!sectionRef.current) {
        sectionRef.current = findSection(ref.current)
      }
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      setOffset({
        x: x * 100 * factor,
        y: y * 100 * factor,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [factor])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      {children}
    </div>
  )
}
