import React from 'react';
import './Precos.css';
import { FaCheck } from 'react-icons/fa';

const planos = [
  {
    nome: 'Lavagem Simples',
    preco: '40',
    popular: false,
    itens: ['Lavagem externa', 'Secagem completa', 'Limpeza dos vidros', 'Pneus pretinhos']
  },
  {
    nome: 'Lavagem Completa',
    preco: '80',
    popular: true,
    itens: ['Lavagem externa premium', 'Aspiração interna', 'Painel e portas', 'Vidros e espelhos', 'Pneus e rodas']
  },
  {
    nome: 'Completa + Polimento',
    preco: '180',
    popular: false,
    itens: ['Tudo da Lavagem Completa', 'Higienização de bancos', 'Polimento técnico', 'Cristalização']
  }
];

export default function Precos() {
  return (
    <section className="precos-section" id="precos">
      <div className="precos-header">
        <h5>TABELA DE PREÇOS</h5>
        <h2>Planos & Preços</h2>
      </div>

      <div className="precos-grid">
        {planos.map((plano, index) => (
          <div key={index} className={`preco-card ${plano.popular ? 'destaque' : ''}`}>
            {plano.popular && <span className="badge-popular">Mais Popular</span>}

            <h3>{plano.nome}</h3>
            <div className="preco-valor">
              <span>R$</span> {plano.preco}
            </div>

            <ul className="lista-beneficios">
              {plano.itens.map((item, i) => (
                <li key={i}><FaCheck className="icon-check" /> {item}</li>
              ))}
            </ul>

            <a
              href={`https://wa.me/5519992323575?text=Olá! Vi o site e gostaria de agendar o plano ${plano.nome}.`}
              target="_blank"
              rel="noopener noreferrer"
              className={plano.popular ? 'btn-destaque' : 'btn-outline'}
              style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
            >
              Agendar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}