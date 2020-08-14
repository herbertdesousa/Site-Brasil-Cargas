import React from 'react';

import Logo from './images/logo.png'
import Header from './images/header.png'

import Furnitures from './images/moveis.jpg'
import Security from './images/security.jpg'
import Velocity from './images/velocity.jpg'

import About from './images/about.jpg'

import './styles.css';

function App() {
  return (
    <div>
      <head>

      </head>
      <body>
        {/* nav-bar */}
        <nav className="nav-bar content">
          <img src={Logo} alt="Logo" />
        </nav>
        {/* end nav-bar */}
        {/* header */}
        <section className="header">
          <div className="fade" />
          <div className="container content">
            <div className="infos content">
              <h1>Brasil Mudanças</h1>
              <h2>Para <span>Tudo</span> e <span>Todos</span></h2>
            </div>
            <form>
              <div>
                <h2>Solicite sua cotação</h2>
                <p>Solicite já sua cotação conosco</p>
              </div>
              <input type="name" id="name" name="name" required placeholder="digite seu nome" />
              <input type="email" id="email" name="email" required placeholder="digite seu email" />
              <textarea id="cotacao" name="cotacao" rows={3} cols="33" required placeholder="digite seu cotação" />
              <button type="submit">
                Solicitar Cotação
                  </button>
            </form>
          </div>
        </section>
        {/* end header */}
        {/* infos */}
        <section className="infos content">
          <div>
            <img src={Furnitures} alt="Mudanças" />
            <h2>Móveis</h2>
            <p>Transportamos todos os  móveis de uma casa</p>
          </div>
          <div>
            <img src={Security} alt="Mudanças" />
            <h2>Segurança</h2>
            <p>Garantimos que a carga chegará completa</p>
          </div>
          <div>
            <img src={Velocity} alt="Mudanças" />
            <h2>Velocidade</h2>
            <p>Entrega o mais rápido possivel</p>
          </div>
        </section>
        {/* end infos */}

        {/* count */}
        <div className="counter">
          <div className="fade" />
          <div>
            <h3>233</h3>
            <p>Clientes</p>
          </div>
          <div className="middle">
            <h3>826</h3>
            <p>Cotações</p>
          </div>
          <div>
            <h3>936</h3>
            <p>Mudanças</p>
          </div>
        </div>
        {/* end count */}

        {/* about */}
        <section className="about">
          <div>
            <h2>Sobre</h2>
            <p>mas afinal das contras, quem é Brasil Cargas</p>
          </div>

          <div className="infos content">
            <div>
              <div>
                <strong>Mudanças</strong>
                <p>Sempre rastreando sua carga e zelando pelo produto</p>
              </div>
              <div className="down">
                <strong>Experiência</strong>
                <p>Temos experiencia de quase 20 anos no mercado, veteranos no assunto</p>
              </div>
            </div>

            <img src={About} alt="Sobre" />

            <div>
              <div>
                <strong>Entrega</strong>
                <p>Sempre pontuais, sempre entregando na data</p>
              </div>
              <div className="down">
                <strong>Cotações</strong>
                <p>Respondemos suas cotações o mais rápido possivel</p>
              </div>
            </div>
          </div>
        </section>
        {/* end about */}

        {/* footer */}
        <div className="footer">
          <div>
            <h3>Brasil Mudanças</h3>
            <p>Compyright 2020 | Brasil Mudanças</p>
          </div>
        </div>
        {/* end footer */}

      </body>
    </div>
  )
}

export default App;