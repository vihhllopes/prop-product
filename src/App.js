import React from 'react';
import './App.css';
import Header from './components/Header/header';

function App() {
  
  return (
    <div className="App">
      <Header/>
      
      <div >
      <hr/>
      <br></br>
      <h4>Detalhes do produto</h4>
      <br></br>
            <p >Smart TV 32” HD LED TCL S615 VA 60Hz - Android Wi-Fi e Bluetooth Google Assistente 2 HDMI</p>
            <div className='text-detalhes'>
            <p><strong>Dimensões do Produto:</strong>Largura: 72,2cm Altura: 42,9cm Profundidade: 7,7cm</p>
            <p><strong>Cor:</strong>PRETO</p>
            <p><strong>Voltagem:</strong>Bivolt</p>
            <p><strong>tempo de Garantia (Meses)</strong>01 ano (3 meses de garantia legal e mais 9 meses de garantia especial concedida pelo fabricante).</p>
            <p><strong>Dimensões do Produto:</strong>Largura: 72,2cm Altura: 42,9cm Profundidade: 7,7cm</p>
            
            <p><strong>Funções:</strong></p>
            <p>Wifi Direct</p>
            <p>Guia de Voz: inglês (EUA)</p>
            <p>Portugûes (Brasil)</p>
            <p>Ultra Clean View</p>
            <p>Digital Clean View</p>
            <p>Busca automatica de Canais</p>
            <p>Desligamento automatico</p>
            <p>legenda</p>
            </div>
        </div>
        
    </div>
    
  );
}

export default App;

