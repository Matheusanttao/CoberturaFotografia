import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <div className="intro-card">
          <p className="intro-text">
            É uma honra poder eternizar este marco tão especial. Para garantir que cada detalhe, abraço e sorriso seja registrado, trabalhamos com uma equipe de dois profissionais, oferecendo uma cobertura completa e um olhar 360° sobre o seu evento.
          </p>
          <p className="intro-text intro-text-highlight">
            "Cinquenta anos é um marco único. Nossa missão é garantir que você aproveite a festa enquanto nós cuidamos de transformar cada momento em uma memória eterna."
          </p>
          <p className="intro-text" style={{ marginTop: '1.5rem' }}>
            Qualquer dúvida, estou à disposição para conversarmos!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro
