import { CollectionCard, Discount } from "./Style";
import { Button } from "@/components/@ui/Button";

function CardColecaoDestaque({ label, img, discount }) {
  return (
    <CollectionCard>
      <Discount>{discount}</Discount>
      <img
        src={img}
        alt={label}
        className="collection-image"
        onError={(e) => {
          e.target.src = "";
        }}
      />
      <p className="collection-label">{label}</p>
      <Button variant="outline">Enviar</Button>
    </CollectionCard>
  );
}

export default CardColecaoDestaque;
