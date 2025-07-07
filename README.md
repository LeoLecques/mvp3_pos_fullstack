# L&L - Soluções Cambiais

Este é um projeto desenvolvido como MVP para a disciplina de Desenvolvimento Frontend Avançado da Pós em FullStack da PUC-Rio.

## 🔍 Descrição do Projeto

O projeto é um conversor de moedas com três páginas principais:

### 1. Página Inicial (`Home`)
- Apresenta a marca e o título do sistema.
- Links para as páginas de Conversão e Histórico.

### 2. Página de Conversão (`Conversor`)
- Permite ao usuário escolher moedas de entrada e saída, digitar um valor e obter a conversão com base na API AwesomeAPI. (https://docs.awesomeapi.com.br/api-de-moedas | Endpoint: https://economia.awesomeapi.com.br/json/last/:moedas)
- Mostra bandeiras das moedas envolvidas.
- O botão “Cotar” realiza a consulta à API e armazena a conversão no `localStorage`.
- Validação de formulário: impede valores vazios ou zero.
- Campo de saída é somente leitura.

### 3. Página de Histórico (`Historico`)
- Exibe todas as conversões armazenadas no `localStorage`.
- Tabela com moeda de entrada, valor, moeda de saída, valor e data/hora.
- Bandeiras das moedas exibidas.
- Botão “Ver” (sem funcionalidade extra).
- Botão para retornar à Home.

### 4. Página 404 (`NotFound`)
- Mostra uma mensagem de erro caso a rota acessada não exista.

---

## 📚 Tecnologias e Bibliotecas Utilizadas

- React
- React Router DOM
- Bootstrap Icons
- HTML + CSS (customizado)
- AwesomeAPI para cotação cambial

---
## Protótipo de Telas no Figma
- https://www.figma.com/proto/dyd4IABNX9RguTH3vsZISX/Untitled?node-id=37-230&p=f&t=xTPGXYuejEAKgCRo-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1
---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/LeoLecques/projeto-cambial.git
```

2. Acesse o diretório do projeto:
```bash
cd projeto-cambial
```

3. Instale as dependências:
```bash
npm install
```

4. Rode o projeto:
```bash
npm run dev
```

O app abrirá automaticamente em `http://localhost:3000`.

---

## 📁 Estrutura de Pastas

```
├── public/
│   └── imagens das bandeiras
├── src/
│   ├── components/
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Conversor.jsx
│   │   ├── Historico.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   └── style.css
│   └── App.jsx
├── README.md
└── package.json
```

---

## ✅ Funcionalidades Implementadas

- [x] Conversão de moedas com consumo de API externa
- [x] Armazenamento de conversões no localStorage
- [x] Histórico com data/hora
- [x] Página 404
- [x] Validação de formulário
- [x] Navegação com `useNavigate`
- [x] Projeto responsivo e estilizado
- [x] README explicativo

---

## 🔗 Autor

**Leonardo Lecques**  
[GitHub](https://github.com/LeoLecques)  
Pós em FullStack — PUC-Rio
