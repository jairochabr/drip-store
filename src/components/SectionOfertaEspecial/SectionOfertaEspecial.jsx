import "./SectionOfertaEspecial.css";
import SapatoEspecial from "../../assets/HomeFotos/SapatoEspecial.png";
import { BtnPrimary } from "../Buotoes/BtnPrimary/BtnPrimary";

export const SectionOfertaEspecial = () => {
  return (
    <>
      <section className="Ofertaescpecial">
        <div className="circle">
          <img className="circleImg" src={SapatoEspecial} alt="" />
        </div>
        <div className="divTextosOferta">
          <h1 className="h1OfertaEspacial">Oferta especial</h1>

          <h2 className="h2OfertaEspecial">
            Air Jordan edição de colecionador
          </h2>

          <p className="Airjordan">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>

          <BtnPrimary texto={"ver oferta"} />
        </div>
      </section>
    </>
  );
};
