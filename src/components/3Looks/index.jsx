import "./looks.scss";
import labios from "../../assets/looks-labios";
import olhos from "../../assets/looks-olhos";
import rosto from "../../assets/looks-rosto";
import tendencia from "../../assets/looks-tendencia"

function Looks() {
  return (
    <section className="looksedicas">
      <h1>Looks e dicas de maquiagem</h1>
      
      <article className="categorias">
      <a href={labios} className="boxcategoria"><h3>Lábios</h3></a>
      <a href={olhos} className="boxcategoria"><h3>Olhos</h3></a>
      <a href={rosto} className="boxcategoria"><h3>Rosto</h3></a>
      <a href={tendencia} className="boxcategoria"><h3>Tendências</h3></a>
      </article>
    </section>
    
    
  );
}
export default Looks;