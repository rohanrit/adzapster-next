'use client'

import { useEffect, useRef, useState } from 'react'

export default function AnimatedDots({ className = '', ...props }) {
  const containerRef = useRef(null)
  const dotsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const scrollRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const dotSize = 2
    const spacing = 40
    const cols = Math.ceil(window.innerWidth / spacing) + 4
    const rows = Math.ceil(window.innerHeight / spacing) + 4

    const fragment = document.createDocumentFragment()

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const dot = document.createElement('div')
        dot.style.cssText = `
          position: absolute;
          width: ${dotSize}px;
          height: ${dotSize}px;
          border-radius: 50%;
          background: var(--border);
          will-change: transform;
          pointer-events: none;
        `
        dot.dataset.col = col
        dot.dataset.row = row
        dot.dataset.baseX = col * spacing
        dot.dataset.baseY = row * spacing
        fragment.appendChild(dot)
        dotsRef.current.push(dot)
      }
    }

    container.innerHTML = ''
    container.appendChild(fragment)

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }

    const handleScroll = () => {
      scrollRef.current = {
        x: window.scrollX,
        y: window.scrollY,
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })

    const animate = () => {
      targetRef.current.x += (mouseRef.current.x - targetRef.current.x) * 0.1
      targetRef.current.y += (mouseRef.current.y - targetRef.current.y) * 0.1

      const time = Date.now() * 0.001
      const scrollX = scrollRef.current.x
      const scrollY = scrollRef.current.y

      dotsRef.current.forEach((dot, i) => {
        const col = parseFloat(dot.dataset.col)
        const row = parseFloat(dot.dataset.row)
        const baseX = col * spacing - scrollX
        const baseY = row * spacing - scrollY

        const distFromCenter = Math.sqrt(
          Math.pow(col - cols / 2, 2) + Math.pow(row - rows / 2, 2)
        )
        const maxDist = Math.sqrt(Math.pow(cols / 2, 2) + Math.pow(rows / 2, 2))
        const normalizeDist = distFromCenter / maxDist

        const waveX = Math.sin(time + row * 0.15) * 4 * (1 - normalizeDist * 0.5)
        const waveY = Math.cos(time + col * 0.15) * 4 * (1 - normalizeDist * 0.5)

        const mouseInfluence = 40 * (1 - normalizeDist)
        const mouseX = targetRef.current.x * mouseInfluence
        const mouseY = targetRef.current.y * mouseInfluence

        const x = baseX + waveX + mouseX
        const y = baseY + waveY + mouseY

        dot.style.transform = `translate(${x}px, ${y}px)`
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
      {...props}
    />
  )
}

export function SectionDots({ className = '' }) {
  const sectionRef = useRef(null)
  const dotsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const dotSize = 2
    const spacing = 40
    const cols = Math.ceil(section.offsetWidth / spacing) + 2
    const rows = Math.ceil(section.offsetHeight / spacing) + 2

    const fragment = document.createDocumentFragment()

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const dot = document.createElement('div')
        dot.style.cssText = `
          position: absolute;
          width: ${dotSize}px;
          height: ${dotSize}px;
          border-radius: 50%;
          background: var(--border);
          will-change: transform;
          pointer-events: none;
        `
        dot.dataset.col = col
        dot.dataset.row = row
        dot.dataset.baseX = col * spacing
        dot.dataset.baseY = row * spacing
        fragment.appendChild(dot)
        dotsRef.current.push(dot)
      }
    }

    section.querySelector('.dots-container')?.remove()
    const container = document.createElement('div')
    container.className = 'dots-container'
    container.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;'
    container.appendChild(fragment)
    section.appendChild(container)

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      }
    }

    section.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      const time = Date.now() * 0.0008
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      dotsRef.current.forEach((dot) => {
        const col = parseFloat(dot.dataset.col)
        const row = parseFloat(dot.dataset.row)
        const baseX = parseFloat(dot.dataset.baseX)
        const baseY = parseFloat(dot.dataset.baseY)

        const waveX = Math.sin(time + row * 0.2) * 3
        const waveY = Math.cos(time + col * 0.2) * 3

        const mouseInfluence = 25
        const x = baseX + waveX + mx * mouseInfluence
        const y = baseY + waveY + my * mouseInfluence

        dot.style.transform = `translate(${x}px, ${y}px)`
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      section.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <div ref={sectionRef} className={className} style={{ position: 'relative' }} />
}