import "./novidades.scss";
import imgnovidades from "../../assets/imgnovidades.jpg";

function Novidades() {
  return (
    <>
      <div>
      <h1>Novidades para você</h1>
      <img src={imgnovidades} alt="Novidades" />
      </div>
    </>
  );
}

export default Novidades;