import React from 'react';
import './Servicos.css';
import { FaWater, FaSprayCan, FaMagic } from 'react-icons/fa'; // Ícones similares aos do print
import lavagemImg from '../assets/lavagem.jpg';
import higienizacaoImg from '../assets/interna.jpg';
import polimentoImg from '../assets/polimento.jpg';

const servicosData = [
  {
    id: 1,
    title: 'Lavagem Completa',
    description: 'Lavagem externa detalhada com shampoo automotivo, secagem com pano de microfibra e finalização impecável.',
    image: lavagemImg,
    icon: <FaWater />
  },
  {
    id: 2,
    title: 'Higienização Interna',
    description: 'Limpeza profunda de estofados, painel, portas e todo o interior. Eliminação de odores e bactérias.',
    image: higienizacaoImg,
    icon: <FaSprayCan />
  },
  {
    id: 3,
    title: 'Polimento & Cristalização',
    description: 'Restauração do brilho original da pintura com polimento técnico e proteção com cristalização duradoura.',
    image: polimentoImg,
    icon: <FaMagic />
  }
];

export default function Servicos() {
  return (
    <section className="servicos-section" id="servicos">
      <div className="servicos-header">
        <h5>O QUE FAZEMOS</h5>
        <h2>Nossos Serviços</h2>
      </div>

      <div className="servicos-grid">
        {servicosData.map((servico) => (
          <div className="servico-card" key={servico.id}>
            <div className="card-image">
              <img src={servico.image} alt={servico.title} />
              <div className="card-icon">
                {servico.icon}
              </div>
            </div>
            <div className="card-content">
              <h3>{servico.title}</h3>
              <p>{servico.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}