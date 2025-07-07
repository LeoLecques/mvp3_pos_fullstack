import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Conversor from './pages/Conversor';
import NotFound from './pages/NotFound';
import Historico from './pages/Historico';
import Detalhes from './pages/Detalhes';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversor" element={<Conversor />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/detalhes/:moedaOrigem" element={<Detalhes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
