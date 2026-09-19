import React, { useState } from 'react';
import { Inicio } from './components/Inicio';
import { Jogo } from './components/Jogo';
import { RegrasDias } from './components/RegraDias';
import { getRegras } from './data/regras';
import './styles.css';

export default function App() {
  // Telas: 'inicio', 'jogo', 'regras'
  const [tela, setTela] = useState('inicio');
  const [regras, setRegras] = useState(getRegras());
  const [configJogo, setConfigJogo] = useState(null);

  const handleStartGame = (config) => {
    setConfigJogo(config);
    setTela('jogo');
  };

  return (
    <div className="app-container theme-gold">
      {tela !== 'inicio' && (
        <div className="nav-header">
          {tela === 'jogo' && (
            <button className="btn-secondary" onClick={() => setTela('inicio')}>
              Sair / Inicio
            </button>
          )}
          <button className="btn-secondary" onClick={() => setTela('regras')}>
            Regras dos Dias
          </button>
        </div>
      )}

      {tela === 'inicio' && (
        <Inicio
          onStartGame={handleStartGame}
          onOpenRegras={() => setTela('regras')}
        />
      )}

      {tela === 'jogo' && configJogo && (
        <Jogo
          config={configJogo}
          regras={regras}
          onReiniciar={() => setTela('inicio')}
        />
      )}

      {tela === 'regras' && (
        <RegrasDias
          regras={regras}
          setRegras={setRegras}
          Voltar={() => setTela(configJogo ? 'jogo' : 'inicio')}
        />
      )}
    </div>
  );
}