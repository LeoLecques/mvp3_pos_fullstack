import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/style.css';

const flags = {
  BRL: '/brasil_pais.png',
  USD: '/estadosunidos_pais.png',
  EUR: '/uniaoeuropeia_pais.png',
  CNY: '/china_pais.png',
  ARS: '/argentina_pais.png',
};

const Detalhes = () => {
  const { moedaOrigem } = useParams();
  const navigate = useNavigate();
  const [conversao, setConversao] = useState(null);

  useEffect(() => {
    const historico = JSON.parse(localStorage.getItem('historicoConversoes')) || [];
    const ultimaConversao = historico.reverse().find(c => c.moedaOrigem === moedaOrigem);
    setConversao(ultimaConversao);
  }, [moedaOrigem]);

  if (!conversao) {
    return (
      <div className="pagina-inicial">
        <Header />
        <main className="conteudo-principal">
          <h1 className="titulo">DETALHES</h1>
          <p>Não foi possível encontrar a conversão.</p>
          <button onClick={() => navigate('/historico')} className="btn btn-outline-secondary">Voltar</button>
        </main>
      </div>
    );
  }

  return (
    <div className="pagina-inicial">
      <Header />
      <main className="conteudo-principal">
        <h1 className="titulo">DETALHES DA CONVERSÃO</h1>

        <div className="conversor">
          <div className="moeda-bloco">
            <h4>{conversao.moedaOrigem}</h4>
            <img src={flags[conversao.moedaOrigem]} alt={conversao.moedaOrigem} className="flag" />
            <p><strong>Valor Entrada:</strong> {conversao.valorEntrada}</p>
          </div>


          <div className="moeda-bloco">
            <h4>{conversao.moedaDestino}</h4>
            <img src={flags[conversao.moedaDestino]} alt={conversao.moedaDestino} className="flag" />
            <p><strong>Valor Saída:</strong> {conversao.valorSaida}</p>
          </div>
        </div>

        <p className="mt-4"><strong>Data/Hora:</strong> {conversao.dataHora}</p>

        <button onClick={() => navigate('/historico')} className="btn btn-outline-primary mt-4">Voltar para Histórico</button>
      </main>
            <footer className="rodape">
        <p>&copy; Puc Rio - Pós FullStack - Leonardo Lecques - MVP Frontend Avançado – github.com/LeoLecques</p>
      </footer>
    </div>
  );
};

export default Detalhes;
