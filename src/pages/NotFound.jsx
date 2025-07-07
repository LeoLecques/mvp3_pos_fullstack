import React from 'react';
import Header from '../components/Header';
import '../styles/style.css';

const NotFound = () => {
  return (
    <div className="pagina-inicial">
      <Header />
      <main className="conteudo-principal">
        <h1 className="titulo">404</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Página não encontrada.</p>
        <a href="/" className="botao-voltar">
          home
        </a>
      </main>
      <footer className="rodape">
        <p>&copy; Puc Rio - Pós FullStack - Leonardo Lecques - MVP Frontend Avançado –github.com/LeoLecques</p>
      </footer>
    </div>
  );
};

export default NotFound;
