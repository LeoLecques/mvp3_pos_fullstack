import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';

const flags = {
  BRL: '/brasil_pais.png',
  USD: '/estadosunidos_pais.png',
  EUR: '/uniaoeuropeia_pais.png',
  CNY: '/china_pais.png',
  ARS: '/argentina_pais.png',
};

const Conversor = () => {
  const [moedaEntrada, setMoedaEntrada] = useState('BRL');
  const [moedaSaida, setMoedaSaida] = useState('USD');
  const [valorEntrada, setValorEntrada] = useState('');
  const [valorSaida, setValorSaida] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleConversao = async () => {
    if (!valorEntrada || isNaN(valorEntrada) || Number(valorEntrada) <= 0) {
      setErro('Informe um valor maior que zero.');
      setValorSaida('');
      return;
    }

    setErro('');
    try {
      const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${moedaEntrada}-${moedaSaida}`, {
        headers: {
          'x-api-key': 'eb881ad72b60f0100c3bcc285b744ad2ec61fd664a74551a949fc1aefb073aa9'
        }
      });

      const data = await response.json();
      const key = `${moedaEntrada}${moedaSaida}`;
      const cotacao = data[key]?.bid || 0;
      const valorConvertido = (valorEntrada * cotacao).toFixed(3);
      setValorSaida(valorConvertido);

      // Salvar no localStorage
      const novaConversao = {
        moedaOrigem: moedaEntrada,
        valorEntrada: Number(valorEntrada).toLocaleString('pt-BR', { minimumFractionDigits: 3 }),
        valorSaida: valorConvertido,
        moedaDestino: moedaSaida,
        dataHora: new Date().toISOString().replace('T', ' ').substring(0, 19)
      };

      const historico = JSON.parse(localStorage.getItem('historicoConversoes')) || [];
      historico.push(novaConversao);
      localStorage.setItem('historicoConversoes', JSON.stringify(historico));
    } catch (err) {
      setErro('Erro ao consultar API de cotação.');
    }
  };

  return (
    <div className="pagina-inicial">
      <Header />
      <main className="conteudo-principal">
        <h1 className="titulo">CONVERSOR DE MOEDAS</h1>

          <button onClick={() => navigate('/')} className="btn btn-outline-secondary botao-voltar-home">
            Voltar para Home
          </button>

        <div className="conversor">
          <div className="moeda-bloco">
            <select value={moedaEntrada} onChange={e => setMoedaEntrada(e.target.value)}>
              {Object.keys(flags).map(moeda => (
                <option key={moeda} value={moeda}>{moeda}</option>
              ))}
            </select>
            <input
              type="number"
              className={erro ? 'input-erro' : ''}
              value={valorEntrada}
              onChange={e => setValorEntrada(e.target.value)}
              placeholder="Digite um valor"
            />
            {erro && <span className="mensagem-erro">{erro}</span>}
            <img src={flags[moedaEntrada]} alt={moedaEntrada} className="flag" />
          </div>

          <div className="seta-central">
            <button onClick={handleConversao} className="botao-cotar">Cotar</button>
          </div>

          <div className="moeda-bloco">
            <select value={moedaSaida} onChange={e => setMoedaSaida(e.target.value)}>
              {Object.keys(flags).map(moeda => (
                <option key={moeda} value={moeda}>{moeda}</option>
              ))}
            </select>
            <input
              type="text"
              value={valorSaida}
              readOnly
              disabled
              className="campo-saida"
            />
            <img src={flags[moedaSaida]} alt={moedaSaida} className="flag" />
          </div>
        </div>
      </main>

      <footer className="rodape">
        <p>&copy; Puc Rio - Pós FullStack - Leonardo Lecques - MVP Frontend Avançado – github.com/LeoLecques</p>
      </footer>
    </div>
  );
};

export default Conversor;
