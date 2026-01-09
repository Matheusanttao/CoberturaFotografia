import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">📱</span>
          <span className="badge-text">Proposta Exclusiva</span>
        </div>
        <h1 className="hero-title">
          Cobertura Fotográfica (50 Anos)
        </h1>
        <p className="hero-subtitle">
          É uma honra poder eternizar este marco tão especial. Para garantir que cada detalhe, abraço e sorriso seja registrado, trabalhamos com uma equipe de dois profissionais, oferecendo uma cobertura completa e um olhar 360° sobre o seu evento.
        </p>
        <div className="hero-highlight">
          <span className="highlight-icon">✨</span>
          <span>Cobertura completa de 6 horas (20h às 02h)</span>
        </div>
      </div>
      <div className="hero-decoration"></div>
    </section>
  )
}

export default Hero
