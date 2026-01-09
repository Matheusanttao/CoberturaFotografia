import React from 'react'
import './WhatIncluded.css'

const WhatIncluded = () => {
  const items = [
    {
      icon: '⏰',
      title: 'Cobertura Estendida',
      description: '06 horas de evento (conforme horário solicitado)'
    },
    {
      icon: '📸',
      title: 'Curadoria',
      description: 'Entrega de 150 fotos selecionadas e tratadas em alta qualidade'
    },
    {
      icon: '✨',
      title: 'Edição Profissional',
      description: 'Ajustes minuciosos de cor, luz e nitidez'
    },
    {
      icon: '🎬',
      title: 'Conteúdo em Vídeo',
      description: '1 vídeo editado (estilo Reels/Recordação) pronto para compartilhar'
    },
    {
      icon: '🎁',
      title: 'Diferencial Spoiler',
      description: 'Enviaremos uma prévia com 5 fotos editadas em até 24h após o evento para você já poder postar nas redes sociais'
    },
    {
      icon: '📦',
      title: 'Entrega Final',
      description: 'Prazo de até 10 dias úteis via link digital'
    }
  ]

  return (
    <section className="what-included">
      <div className="what-included-content">
        <div className="section-header">
          <span className="section-icon">📦</span>
          <h2 className="section-title">O que está incluso</h2>
        </div>

        <div className="items-grid">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="item-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="item-icon">{item.icon}</div>
              <h3 className="item-title">{item.title}</h3>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIncluded
