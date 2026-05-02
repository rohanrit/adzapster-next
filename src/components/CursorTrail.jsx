'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--primary)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        animate={{ opacity: [0.8, 0.4, 0.8] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: 24,
          height: 24,
          borderRadius: '50%',
          border: '2px solid var(--accent-purple)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: '1px dashed var(--text-muted)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9997,
        }}
        animate={{ 
          rotate: 360,
          opacity: [0.2, 0, 0.2],
        }}
        transition={{ 
          rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 2, repeat: Infinity },
        }}
      />
    </>
  )
}