import React, { useState } from "react";
import "./Home.css";
import carImage from "../assets/car.jpg";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="home"
      style={{ backgroundImage: `url(${carImage})` }}
    >
      <div className="overlay"></div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#precos" onClick={() => setMenuOpen(false)}>Preços</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>

          <a
            href="https://wa.me/5519992323575?text=Olá! Vi o site e gostaria de agendar uma lavagem."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-agendar"
            style={{ textDecoration: 'none' }}
          >
            Agendar
          </a>
        </nav>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      {/* HERO */}
      <div className="hero">

        <h1>
          Seu Carro <br />
          <span>Como Novo</span>
        </h1>

        <p>
          Lavagem profissional com tecnologia de ponta e produtos premium.
          <br />
          Cuidamos do seu veículo como se fosse nosso.
        </p>

        <div className="buttons">
          <button className="btn-primary">Nossos Serviços</button>
          <a
            href="https://wa.me/5519992323575?text=Olá! Vi o site e gostaria de agendar uma lavagem."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ textDecoration: 'none' }}
          >
            <FaPhoneAlt /> Agendar
          </a>
        </div>
      </div>
    </section>
  );
}