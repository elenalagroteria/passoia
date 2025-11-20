import "./looks.scss";
import labios from "../../assets/looks-labios.png";
import olhos from "../../assets/looks-olhos.jpg";
import rosto from "../../assets/looks-rosto.png";
import tendencia from "../../assets/looks-tendencia.png"

function Looks() {
  return (
    <section className="looksedicas">
      <h1>Looks e dicas de maquiagem</h1>
      
      <article className="categorias">
      
      <a href="" className="boxcategoria"><img src={labios}/><h3>Lábios</h3></a>

      <a href="" className="boxcategoria"><img src={olhos}/><h3>Olhos</h3></a>

      <a href="" className="boxcategoria"><img src={rosto}/><h3>Rosto</h3></a>
      
      <a href="" className="boxcategoria"><img src={tendencia}/><h3>Tendências</h3></a>

      </article>
    </section>
    
    
  );
}
export default Looks;