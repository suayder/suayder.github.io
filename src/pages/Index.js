import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Site pessoal do Suayder."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Sobre este Site</Link></h2>
          <p>
            Aqui compilo minha história de vida profissional e pessoal para quem quiser me conhecer.
          </p>
        </div>
      </header>
      <p>Olá! Bem vindos ao meu mundo virtual.</p>
      Aqui compartilho insights, projetos emocionantes e descobertas que em uma mistura de ciência e
      <p>arte formam a minha essência única.</p>

      <p>Por favor, sinta-se a vontade para ler mais <Link to="/about">sobre mim</Link>,
        ou você pode dar uma olhada no meu {' '}
        <Link to="/resume">resumo profisisonal</Link>, {' '}
        <Link to="/projects">projetos</Link> {' '}
        ou <Link to="/contact">contatar-me</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
