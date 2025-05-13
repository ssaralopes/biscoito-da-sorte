
import React, { useState } from 'react';
import './App.css';

const frases = [
  { texto: "Encontre o que você ama e deixe que isso te mate.", autor: "Charles Bukowski" },
  { texto: "Às vezes você tem que se levantar sozinho e continuar mesmo sangrando.", autor: "Charles Bukowski" },
  { texto: "O problema do mundo é que as pessoas inteligentes estão cheias de dúvidas.", autor: "Charles Bukowski" },

  { texto: "A imaginação de uma mulher é muito rápida; ela salta da admiração para o amor, e do amor para o matrimônio em um instante.", autor: "Jane Austen" },
  { texto: "Não existe encanto igual à ternura do coração.", autor: "Jane Austen" },
  { texto: "A vaidade e o orgulho são coisas diferentes, embora frequentemente usadas como sinônimos.", autor: "Jane Austen" },

  { texto: "Liberdade é pouco. O que eu desejo ainda não tem nome.", autor: "Clarice Lispector" },
  { texto: "Sou como você me vê. Posso ser leve como uma brisa ou forte como uma ventania.", autor: "Clarice Lispector" },
  { texto: "Renda-se, como eu me rendi. Mergulhe no que você não conhece.", autor: "Clarice Lispector" },

  { texto: "A vida é a arte do encontro, embora haja tanto desencontro pela vida.", autor: "Vinícius de Moraes" },
  { texto: "Que não seja imortal, posto que é chama. Mas que seja infinito enquanto dure.", autor: "Vinícius de Moraes" },
  { texto: "O amor é um fogo que arde sem se ver.", autor: "Vinícius de Moraes" },

  { texto: "Tudo vale a pena quando a alma não é pequena.", autor: "Fernando Pessoa" },
  { texto: "O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem.", autor: "Fernando Pessoa" },
  { texto: "Sentir tudo de todas as maneiras, viver tudo de todos os lados.", autor: "Fernando Pessoa" },

  { texto: "Que minha solidão me sirva de companhia.", autor: "Caio Fernando Abreu" },
  { texto: "Tenho uma alegria escondida em mim.", autor: "Caio Fernando Abreu" },
  { texto: "Eu só queria que alguém me notasse sem eu precisar gritar.", autor: "Caio Fernando Abreu" },

  { texto: "Você deve querer se encontrar. Porque querer a si mesmo é um ato revolucionário.", autor: "Rupi Kaur" },
  { texto: "Como você ama a si mesmo é como você ensina todo mundo a te amar.", autor: "Rupi Kaur" },
  { texto: "Se você fosse flor, seria primavera o ano inteiro.", autor: "Rupi Kaur" },

  { texto: "Aprendi com as primaveras a me deixar cortar e a voltar sempre inteira.", autor: "Cecília Meireles" },
  { texto: "Tenho fases, como a lua.", autor: "Cecília Meireles" },
  { texto: "A vida só é possível reinventada.", autor: "Cecília Meireles" },

  { texto: "Deus de vez em quando me tira a poesia. Olho pedra, vejo pedra mesmo.", autor: "Adélia Prado" },
  { texto: "Acordei cedo e tomei um banho de poesia.", autor: "Adélia Prado" },
  { texto: "O que a memória ama, fica eterno.", autor: "Adélia Prado" }
];

function App() {
  const [frase, setFrase] = useState(null);
  const [imagem, setImagem] = useState("/img/biscoito.png");
  const [biscoitoQuebrado, setBiscoitoQuebrado] = useState(false); // novo estado

  const quebrarBiscoito = () => {
    if (!biscoitoQuebrado) {
      const index = Math.floor(Math.random() * frases.length);
      setFrase(frases[index]);
      setImagem("/img/biscoitoQuebrado.png");
      setBiscoitoQuebrado(true); // impede sorteios subsequentes
    }
  };

  const reiniciarBiscoito = () => {
    setFrase(null);
    setImagem("/img/biscoito.png");
    setBiscoitoQuebrado(false); // libera novamente o sorteio
  };

  return (
    <div className="app-container">
      <h1>🥠 Biscoito da Sorte Literário</h1>
      <img src={imagem} alt="Biscoito da sorte" />
      <p className="frase">
        {frase && (
          <>
          <em>{frase.texto}</em> — <strong>{frase.autor}</strong>
          </>
        )}
      </p>
      <div className="botoes">
        <button onClick={quebrarBiscoito} disabled={biscoitoQuebrado}>
          Quebrar biscoito
        </button>
        <button onClick={reiniciarBiscoito}>Tentar de novo</button>
      </div>
    </div>
  );
}

export default App;
