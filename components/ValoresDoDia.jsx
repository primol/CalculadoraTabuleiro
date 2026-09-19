import React from 'react';

export function ValoresDoDia({ diaAtual, regraDia, onProximaRodada, totalRodadas }) {
  if (!regraDia) return null;

  return (
    <div className="center-panel">
      <div className="round-info">
        <h3>DIA {diaAtual}</h3>
        <p>RODADA {diaAtual}/{totalRodadas}</p>
      </div>

      <div className="values-list">
        <h3>VALORES DO DIA</h3>
        
        <h4>VALORES</h4>
        <div className="value-item">
          <span>Torre</span>
          <strong>R$ {regraDia.torre}</strong>
        </div>
        <div className="value-item">
          <span>Perk</span>
          <strong>R$ {regraDia.perk}</strong>
        </div>
        <div className="value-item">
          <span>Terreno</span>
          <strong>R$ {regraDia.terreno}</strong>
        </div>
      </div>

      <button className="btn-primary" onClick={onProximaRodada}>
        PRÓXIMA RODADA
      </button>
    </div>
  );
}