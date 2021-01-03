import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


import './styles.css';



const TeacherItem = () => {

  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/3603793?s=460&u=1bd6b96348197a20f1608651b90cda26732273bb&v=4" alt="Felipe" />
            <div>
              <strong>Diego Fernandes</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhjores tecnologias de quimica avancada.
            
            <br />
            
            Apaixonado por explodis coisas em laboratorio e por mudar a vida das pessoas atraves de experiencias.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
                  Entrar em contato
            </button>
          </footer>

        </article>
  );
}

export default TeacherItem;