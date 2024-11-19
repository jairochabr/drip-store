import { ImageContent, OfferButton, TextContent } from "./Style";
import { OFFER_SECTION } from "@/constants";
import * as Styled from './Style'

export function SpecialOffer() {
  return (
    <Styled.Offer>
      <Styled.Container>
        <Styled.Content>
          <ImageContent>
            <img src={OFFER_SECTION.imageSrc} alt={OFFER_SECTION.title} />
          </ImageContent>
          <TextContent>
            <p className="subtitle">{OFFER_SECTION.subtitle}</p>
            <h2 className="title">{OFFER_SECTION.title}</h2>
            <p className="description">{OFFER_SECTION.description}</p>
            <OfferButton>{OFFER_SECTION.buttonText}</OfferButton>
          </TextContent>
        </Styled.Content>
      </Styled.Container>
    </Styled.Offer>
  );
}
