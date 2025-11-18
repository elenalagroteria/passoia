import "./looks.scss";
import labios from "../../assets/looks-labios";
import olhos from "../../assets/looks-olhos";
import rosto from "../../assets/looks-rosto";
import tendencia from "../../assets/looks-tendencia"

function Looks() {
  return (
    <div>
      <img src={labios} alt="Lábios" />
      <img src={olhos} alt="" />
      <img src={rosto} alt="" />
      <img src={tendencia} alt="" />
    </div>
  );
}
export default Looks;