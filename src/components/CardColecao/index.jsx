import { Button } from "@/components/@ui/Button";
import "./CardColecaoDestaque.css";

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
    <Button variant="outline">Enviar</Button>
    </div>
  );
}

export default CardColecaoDestaque;