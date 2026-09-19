import React, { useState } from 'react';
import { Jogador } from './Jogador';
import { ValoresDoDia } from './ValoresDoDia';

export function Jogo({ config, regras, onReiniciar }) {
  const TOTAL_RODADAS = 30;
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const [j1, setJ1] = useState({ nome: config.nomeJ1, saldo: config.saldoInicial });
  const [j2, setJ2] = useState({ nome: config.nomeJ2, saldo: config.saldoInicial });

  const regraDiaAtual = regras.find(
    (regra) => rodadaAtual >= regra.inicio && rodadaAtual <= regra.fim,
  ) || regras[0];

  const handleProximaRodada = () => {
    if (rodadaAtual < TOTAL_RODADAS) {
      setRodadaAtual((prev) => prev + 1);
    } else {
      setFimDeJogo(true);
    }
  };

  const atualizarSaldoJ1 = (delta) => {
    setJ1((prev) => ({ ...prev, saldo: prev.saldo + delta }));
  };

  const atualizarSaldoJ2 = (delta) => {
    setJ2((prev) => ({ ...prev, saldo: prev.saldo + delta }));
  };

  const getVencedor = () => {
    if (j1.saldo > j2.saldo) return j1.nome;
    if (j2.saldo > j1.saldo) return j2.nome;
    return 'Empate!';
  };

  if (fimDeJogo) {
    return (
      <div className="screen-card">
        <h2>FIM DO JOGO</h2>
        <br />
        <p><strong>{j1.nome}:</strong> R$ {j1.saldo}</p>
        <p><strong>{j2.nome}:</strong> R$ {j2.saldo}</p>
        <br />
        <h3>
          Vencedor: <span style={{ color: '#28a745' }}>{getVencedor()}</span>
        </h3>
        <br />
        <button className="btn-primary" onClick={onReiniciar}>
          Novo Jogo
        </button>
      </div>
    );
  }

  return (
    <div className="game-layout">
      <Jogador
        jogadorState={j1}
        onAtualizarSaldo={atualizarSaldoJ1}
        regraDia={regraDiaAtual}
      />

      <ValoresDoDia
        diaAtual={rodadaAtual}
        regraDia={regraDiaAtual}
        onProximaRodada={handleProximaRodada}
        totalRodadas={TOTAL_RODADAS}
      />

      <Jogador
        jogadorState={j2}
        onAtualizarSaldo={atualizarSaldoJ2}
        regraDia={regraDiaAtual}
      />
    </div>
  );
}