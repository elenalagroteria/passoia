import "./footer.scss";

import mastercard from "../../assets/iconespagamento/mastercard.svg";
import visa from "../../assets/iconespagamento/visa.svg";
import pix from "../../assets/iconespagamento/pix.svg";
import boleto from "../../assets/iconespagamento/boleto.svg";
import facebook from "../../assets/iconesredes/socialface.svg";
import instagram from "../../assets/iconesredes/socialinsta.svg";
import twitter from "../../assets/iconesredes/socialtwitter.svg";
import youtube from "../../assets/iconesredes/socialyoutube.svg";  

function Footer() {
    return (
        <section className="container">
        <footer>
            <section className="atendimento">
                <h2>Atendimento</h2>
                <a href="">Fale Conosco</a>
                <a href="">Perguntas Frequentes</a>
                <a href="">Meus Pedidos</a>
                <a href="">Nossas Lojas</a>
            </section>
            <section className="pagamento">
                <h2>Formas de pagamento</h2>
                <section className="cartaoepix">
                    <img src={mastercard} alt="Mastercard" />
                    <img src={visa} alt="Visa" />
                    <img src={pix} alt="Pix" />
                </section>
                <section className="boleto">
                    <img src={boleto} alt="Boleto" />
                </section>
            </section>
            <section className="redes">
                <article className="titulo">
                <h2>Redes Sociais</h2>
                </article>
                <article className="iconesredes">
                <a href=""><img src={facebook} alt="Facebook" /></a>
                <a href=""><img src={instagram} alt="Instagram" /></a>
                <a href=""><img src={twitter} alt="Twitter" /></a>
                <a href=""><img src={youtube} alt="YouTube" /></a>
                </article>
            </section>
        </footer>
        </section>
    );
}

export default Footer;