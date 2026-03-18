import React from 'react';
import './Contato.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaInstagram } from 'react-icons/fa';

export default function Contato() {
  return (
    <section className="contato-section" id="contato">
      <div className="contato-header">
        <h5>FALE CONOSCO</h5>
        <h2>Entre em Contato</h2>
      </div>

      <div className="contato-container">
        <div className="info-cards">
          
          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-text">
              <span>Endereço</span>
              <p>Jardim São Bento - Hortolândia</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>
            <div className="info-text">
              <span>Telefone</span>
              <p>(19) 99232-3575</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaClock />
            </div>
            <div className="info-text">
              <span>Horário</span>
              <p>Sáb: 7h às 18h</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaInstagram />
            </div>
            <div className="info-text">
              <span>Instagram</span>
              <p>@gpgaragem</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}