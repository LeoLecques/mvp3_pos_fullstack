import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardOpcao = ({ icone, titulo, rota }) => {
  const navigate = useNavigate();

  return (
    <div className="card-opcao" onClick={() => navigate(rota)}>
      <p className="titulo-opcao">{titulo}</p>
      <i className={`bi ${icone} icone-opcao`}></i>
    </div>
  );
};

export default CardOpcao;
