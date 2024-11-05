import Button, {
  ContainerStyle,
  ContentStyle,
  ImageContent,
  OfferStyles,
  TextContent,
} from "./Style";
import { OFFER_SECTION } from "@/constants";

export function OfferSection() {
  return (
    <OfferStyles>
      <ContainerStyle>
        <ContentStyle>
          <ImageContent>
            <img src={OFFER_SECTION.imageSrc} alt={OFFER_SECTION.title} />
          </ImageContent>
          <TextContent>
            <p className="subtitle">{OFFER_SECTION.subtitle}</p>
            <h2 className="title">{OFFER_SECTION.title}</h2>
            <p className="description">{OFFER_SECTION.description}</p>
            <Button>{OFFER_SECTION.buttonLabel}</Button>
          </TextContent>
        </ContentStyle>
      </ContainerStyle>
    </OfferStyles>
  );
}
