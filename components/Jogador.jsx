import React, { useState } from 'react';

export function Jogador({ jogadorState, onAtualizarSaldo, regraDia }) {
  const [valDespesa, setValDespesa] = useState('');
  const [valGanho, setValGanho] = useState('');
  const [detalhes, setDetalhes] = useState('');

  // Regra de negócio: Jogador precisa primeiro registrar a despesa antes de liberar o ganho
  const [despesaRegistrada, setDespesaRegistrada] = useState(false);

  const handleDespesa = () => {
    const valor = Number(valDespesa);
    if (valor > 0) {
      onAtualizarSaldo(-valor);
      setValDespesa('');
      setDespesaRegistrada(true);
    }
  };

  const handleGanho = () => {
    const valor = Number(valGanho);
    if (valor > 0) {
      onAtualizarSaldo(valor);
      setValGanho('');
      setDespesaRegistrada(false); // Reseta a obrigatoriedade para a próxima ação
    }
  };

  const handleComprar = (preco) => {
    if (jogadorState.saldo < preco) {
      alert('Saldo insuficiente!');
      return;
    }
    onAtualizarSaldo(-preco);
  };

  return (
    <div className="player-card">
      <h3 className="player-title">{jogadorState.nome}</h3>
      <div className="player-balance">R$ {jogadorState.saldo}</div>

      {/* Regra de Despesa Obrigatória */}
      <div className="action-row">
        <input
          type="number"
          placeholder="Despesa"
          value={valDespesa}
          onChange={(e) => setValDespesa(e.target.value)}
        />
        <button className="btn-danger" onClick={handleDespesa}>
          Despesa
        </button>
      </div>

      <div className="action-row">
        <input
          type="number"
          placeholder="Ganho"
          value={valGanho}
          onChange={(e) => setValGanho(e.target.value)}
          disabled={!despesaRegistrada} 
        />
        <button
          className="btn-success"
          onClick={handleGanho}
          disabled={!despesaRegistrada}
        >
          Ganho
        </button>
      </div>

      <div className="items-group">
        <h4>Compras</h4>
        <div className="item-buy-row">
          <button className="btn-secondary purchase-button" onClick={() => handleComprar(regraDia.torre)}>
            Torre <span>R$ {regraDia.torre}</span>
          </button>
        </div>
        <div className="item-buy-row">
          <button className="btn-secondary purchase-button" onClick={() => handleComprar(regraDia.perk)}>
            Perk <span>R$ {regraDia.perk}</span>
          </button>
        </div>
        <div className="item-buy-row">
          <button className="btn-secondary purchase-button" onClick={() => handleComprar(regraDia.terreno)}>
            Terreno <span>R$ {regraDia.terreno}</span>
          </button>
        </div>
      </div>

      <textarea
        className="game-notes"
        placeholder="Detalhes do jogo"
        value={detalhes}
        onChange={(e) => setDetalhes(e.target.value)}
        rows="3"
      />
    </div>
  );
}