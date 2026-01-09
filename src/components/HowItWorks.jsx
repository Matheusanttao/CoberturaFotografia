import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-content">
        <div className="section-header">
          <span className="section-icon">🌟</span>
          <h2 className="section-title">Diferencial da Nossa Dupla</h2>
        </div>
        
        <div className="info-box">
          <p className="info-text">
            Diferente de uma cobertura comum, nossa equipe utiliza câmeras de alta performance aliadas à tecnologia do <strong>iPhone 16 Pro</strong> para cobrir todas as 6 horas de festa (das 20h às 02h):
          </p>
        </div>

        <div className="professionals">
          <div className="professional-card professional-1">
            <div className="professional-header">
              <span className="professional-number">1</span>
              <h3 className="professional-title">Fotógrafo 1</h3>
              <span className="professional-subtitle">Registros Clássicos</span>
            </div>
            <p className="professional-description">
              Foca nos registros clássicos, fotos com convidados nas mesas, o brinde e a família.
            </p>
          </div>

          <div className="professional-card professional-2">
            <div className="professional-header">
              <span className="professional-number">2</span>
              <h3 className="professional-title">Fotógrafo 2</h3>
              <span className="professional-subtitle">Emoções e Energia</span>
            </div>
            <p className="professional-description">
              Foca em capturar as emoções espontâneas e a energia da pista de dança.
            </p>
          </div>
        </div>

        <div className="info-box" style={{ marginTop: '2rem' }}>
          <p className="info-text">
            <strong>Foco na Família:</strong> Atenção especial aos registros com pais, filhos, netos e amigos de longa data, garantindo que ninguém importante fique de fora.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
