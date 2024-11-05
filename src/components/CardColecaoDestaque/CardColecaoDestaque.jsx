import "./CardColecaoDestaque.css";
import { BtnDefault } from "../Buotoes/BtnDefault/BtnDefault";

function CardColecaoDestaque({ label, img, discount }) {
  return (
    <div className="collection-card">
      <span className="discount">{discount}</span>
      <img
        src={img}
        alt={label}
        className="collection-image"
        onError={(e) => {
          e.target.src = "";
        }} // Imagem padrão
      />
      <p className="collection-label">{label}</p>
      <BtnDefault texto={"Comprar"} style={{ marginTop: "20px" }} />
    </div>
  );
}

export default CardColecaoDestaque;
