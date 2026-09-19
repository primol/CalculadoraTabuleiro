import React, { useState } from 'react';

export function Inicio({ onStartGame, onOpenRegras, temaDourado, onToggleTema }) {
  const [j1, setJ1] = useState('Jogador 1');
  const [j2, setJ2] = useState('Jogador 2');
  const [saldoInicial, setSaldoInicial] = useState(1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    onStartGame({
      nomeJ1: j1 || 'Jogador 1',
      nomeJ2: j2 || 'Jogador 2',
      saldoInicial: Number(saldoInicial) || 0,
    });
  };

  return (
    <div className="screen-card">
      <h2>Calculadora do Jogo</h2>
      <p className="theme-kicker">Prepare a mesa e comece a partida</p>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome do Jogador 1:</label>
          <input type="text" value={j1} onChange={(e) => setJ1(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Nome do Jogador 2:</label>
          <input type="text" value={j2} onChange={(e) => setJ2(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Saldo Inicial (R$):</label>
          <input
            type="number"
            value={saldoInicial}
            onChange={(e) => setSaldoInicial(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-success" style={{ width: '100%', marginTop: '10px' }}>
          Iniciar Jogo
        </button>
      </form>
      <br />
      <button onClick={onOpenRegras} className="btn-secondary" style={{ width: '100%' }}>
        Regras dos Dias (Configurar)
      </button>
      <button onClick={onToggleTema} className="theme-toggle" style={{ width: '100%' }}>
        {temaDourado ? 'Usar tema claro' : 'Ativar tema preto e ouro'}
      </button>
    </div>
  );
}