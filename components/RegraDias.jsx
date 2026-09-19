import React, { useState } from 'react';
import { saveRegras } from '../data/regras';

export function RegrasDias({ regras, setRegras, Voltar }) {
  const [regrasLocais, setRegrasLocais] = useState(regras);

  const handleChange = (index, campo, valor) => {
    const novasRegras = [...regrasLocais];
    novasRegras[index] = {
      ...novasRegras[index],
      [campo]: Number(valor) || 0,
    };
    setRegrasLocais(novasRegras);
  };

  const handleSalvar = () => {
    saveRegras(regrasLocais);
    setRegras(regrasLocais);
    alert('Regras salvas com sucesso!');
    Voltar();
  };

  return (
    <div>
      <h2>Regras dos Dias (Preços por Intervalo)</h2>
      <br />
      <div className="regras-grid">
        {regrasLocais.map((regra, idx) => (
          <div key={regra.inicio} className="regra-dia-card">
            <h4>DIAS {regra.inicio} - {regra.fim}</h4>
            <div className="form-group">
              <label>Torrer:</label>
              <input
                type="number"
                value={regra.torrer}
                onChange={(e) => handleChange(idx, 'torrer', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Perk:</label>
              <input
                type="number"
                value={regra.perk}
                onChange={(e) => handleChange(idx, 'perk', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Terreno:</label>
              <input
                type="number"
                value={regra.terreno}
                onChange={(e) => handleChange(idx, 'terreno', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
      <br />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn-success" onClick={handleSalvar}>
          Salvar Regras
        </button>
        <button className="btn-secondary" onClick={Voltar}>
          Voltar
        </button>
      </div>
    </div>
  );
}