import { useState } from "react";

// Import das imagens
import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";
import marrom from "../../assets/marrom.png";
import nude from "../../assets/base.png";
import glossaberto from "../../assets/imglancamentos/1glossaberto.jpg";
import glossfechados from "../../assets/imglancamentos/3glossfechados.jpg";
import battons from "../../assets/imglancamentos/2battons.jpg";
import estrelas from "../../assets/estrelas.png";

function Lancamentos() {
  // Estado que guarda a cor (imagem) atual
  // O valor inicial é a imagem "vermelho"
  const [cor, setCor] = useState(vermelho);

  return (
    <>
      {/* Esse box é inteiro para os lançamentos, para separar título e conteúdo */}
      <section className="boxlancamentos">
        
      <h1>APROVEITE OS LANÇAMENTOS</h1>
      
      <section className="lancamentos">
      <section className="imagens">
      {/* Imagens dos produtos pequenos em flexbox column */}
        <section className="batons">
          <img src={glossaberto} alt="Batom líquido aberto" />
          <img src={battons} alt="Batons" />
          <img src={glossfechados} alt="Batom líquido fechado" />
        </section>
        
      {/* A imagem exibida será sempre a do estado "cor" */}
      <img src={cor} alt="Batom" />
      </section>
      
      {/* Box de descrição e botões */}
      <section className="boxdescricao">
        <img src={estrelas} alt="Estrelas" />
        <h2>Matte Premium</h2> 
        <h3>Cores disponíveis</h3>
        
        <section className="botoescores">
      {/* Cada botão altera o estado "cor", trocando a imagem exibida */}
      <button onClick={() => setCor(vermelho)}>Vermelho</button>
      <button onClick={() => setCor(azul)}>Azul</button>
      <button onClick={() => setCor(marrom)}>Marrom</button>
      <button onClick={() => setCor(nude)}>Nude</button>
        </section>
        
        <h4>Descrição</h4>
        <p>O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
      </section>
      </section>
      </section>
    </>
  );
}

export default Lancamentos;
