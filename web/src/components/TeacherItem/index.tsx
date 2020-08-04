import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/8021140?s=460&u=0e3db5f6c5673d2743031efdee8320ffc115bbb6&v=4"
          alt="Syond"
        />
        <div>
          <strong>Syond Santos</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Bacharel em SI e desenvolvedor web Full Stack, e atual curioso do
        ecosistema JavaScript.
        <br />
        <br />
        Carrego uma vasta experiência em linguagens de programação e experiência
        em dar aulas.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
