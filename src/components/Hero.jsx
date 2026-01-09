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
          Cobertura Story Maker (50 Anos)
        </h1>
        <p className="hero-subtitle">
          Transforme a sua celebração em um conteúdo dinâmico e pronto para as redes sociais. O serviço de Story Maker foca na agilidade, na estética vertical e na captura da energia real da festa através de uma cobertura completa.
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
