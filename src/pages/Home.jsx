import React from 'react';
import Header from '../components/Header';
import CardOpcao from '../components/CardOpcao';

const Home = () => {
  return (
    <div className="pagina-inicial">
      <Header />
      <main className="conteudo-principal">
        <div className="opcoes-container">
          <CardOpcao icone="bi-currency-exchange" titulo="Conversor de Moedas" rota="/conversor" />
          <CardOpcao icone="bi-calendar" titulo="Histórico de Cotação" rota="/historico" />
        </div>
      </main>
      <footer className="rodape">
        <p>&copy; Puc Rio - Pós FullStack - Leonardo Lecques - MVP Frontend Avançado – github.com/LeoLecques</p>
      </footer>
    </div>
  );
};

export default Home;
