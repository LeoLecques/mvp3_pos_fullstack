import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/style.css';

const Historico = () => {
  const [historico, setHistorico] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('historicoConversoes')) || [];
    setHistorico(dados);
  }, []);

  return (
    <div className="pagina-inicial">
      <Header />
      <main className="conteudo-principal">
        <h1 className="titulo">HISTÓRICO DE COTAÇÃO</h1>

        <button onClick={() => navigate('/')} className="btn btn-outline-secondary botao-voltar-home">
            Voltar para Home
         </button>

        <table className="tabela-historico">
          <thead>
            <tr>
              <th>MOEDA ENTRADA</th>
              <th>VALOR ENTRADA</th>
              <th>VALOR SAÍDA</th>
              <th>MOEDA SAÍDA</th>
              <th>DATA E HORA</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {historico.map((item, idx) => (
              <tr key={idx}>
                <td>{item.moedaOrigem}</td>
                <td>{item.valorEntrada}</td>
                <td>{item.valorSaida}</td>
                <td>{item.moedaDestino}</td>
                <td>{item.dataHora}</td>
                <td>
                  <button
                    onClick={() => navigate(`/detalhes/${item.moedaOrigem}`)}
                    className="btn btn-sm btn-primary"
                  >
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
            <footer className="rodape">
        <p>&copy; Puc Rio - Pós FullStack - Leonardo Lecques - MVP Frontend Avançado – github.com/LeoLecques</p>
      </footer>
    </div>
  );
};

export default Historico;
